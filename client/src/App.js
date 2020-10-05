import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import Register from './Components/User/Register';
import Login from './Components/User/Login';
import axios from 'axios';
import './app.css';
import Pages from './Components/PostsPage/Pages'
import Home from './Components/Home/Home'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  {logoutUser}  from './actions/userActions';
import Logout from './Components/User/Logout'
import PagesDetails from './Components/PostsPage/PagesDetails'
import ImagesPage from './Components/ImagesPage/ImagesPage'

import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false 
    }
  }
  // handle page reloading, if the user is logged in, continue to login
  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.setState(() => ({ 
        isAuthenticated: true 
      }))
    }
  }

  handleAuthentication = (boolean) => {
    this.setState(() => ({
      isAuthenticated: boolean
    }))
  }

  render() {
    return(
      <Provider store={store}>
      <BrowserRouter>
      
        <div className="container">
          
          <div className="pt-5">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <ul className="navbar-nav mr-auto">
                {this.state.isAuthenticated ? (
                 
                  <div className=" navitems1 "> 
                  <li className="nav-item ml-4"><Link to="/homepage" >Home</Link></li>
                  <li className="nav-item ml-4"><Link to="/posts" >Post-Page</Link></li>
                  <li className="nav-item ml-4"><Link to="/images" >Images Page</Link></li>
                  <li className="nav-item ml-4"><Link to="/users/logout" >Logout</Link></li>
                  </div>
              

                  ) : (
                  <div className="navitems1">
                    {/* <li className="nav-item ml-5"><Link to="/" >Home</Link></li> */}
                    <li className="nav-item ml-5"><Link to="/users/register">Register</Link></li>
                    <li className="nav-item ml-5"><Link to="/users/login">Login</Link></li>
                    
                  </div>
                )}
              </ul>
            </nav>

          </div>
          <Switch>
          <Route path="/homepage" exact={true} component={ Home} />
          <Route path="/images" exact={true} component={ ImagesPage} />
          <Route path="/posts/:id" exact={true} component={ PagesDetails} />
          <Route path="/posts" component={ Pages } />
          <Route path="/users/register" component={ Register } />
          <Route path="/users/logout" render={(props) => {
              return <Logout {...props} handleAuthentication={this.handleAuthentication} />
          }} />
          <Route path="/" render={(props) => {
              return <Login {...props} handleAuthentication={this.handleAuthentication} />
          }} />

          

        </Switch>
       
       
        </div>
          
        
      </BrowserRouter>  
      
      
      </Provider>
    )
    
  }
}


export default App;
//export default connect(mapStateToProps, { logoutUser })(App);
