import React from 'react';
// import form from './../RegisterForm/form.css';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { setAuthenticated } from '../../actions/userActions';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/userActions';



//import jwt_decode from 'jwt-decode'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.setAuthenticated(true);
    this.props.fetchUser(formData);

    // change the navigation links = update the state of isAuthenticated in the parent component
    this.props.handleAuthentication(true);

    this.props.history.push('/homepage');
  };

  handleChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  render() {
    return (
      <div>
        <div className='formheader col-md-6'>
          <h2>Login </h2>
          <Form onSubmit={this.handleSubmit}>
            {this.state.errors && (
              <p className='formcenter'>{this.state.errors}</p>
            )}
            <div>
              <FormGroup row>
                <Label sm={2} className='headerlabel'>
                  Email :
                </Label>

                <Col sm={10}>
                  <Input
                    type='text'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    className='form-control'
                    placeholder='Enter email'
                  ></Input>
                </Col>
              </FormGroup>
            </div>
            <div>
              <FormGroup row>
                <Label sm={2} className='headerlabel'>
                  Password:
                </Label>
                <Col sm={10}>
                  <Input
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    className='form-control'
                    placeholder='your password'
                  ></Input>
                </Col>
              </FormGroup>
            </div>
            <Button color='primary'>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  setAuthenticated : PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.item
});

//export default Login
export default connect(mapStateToProps, { fetchUser,setAuthenticated} )(Login);

// import React from 'react';
// // import form from './../RegisterForm/form.css';
// import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import PropTypes from 'prop-types';
// import { setAuthenticated } from '../../actions/userActions';
// import { connect } from 'react-redux';
// import { fetchUser } from '../../actions/userActions';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       error: false
//     };
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log('u clicked')
//     const formData = {
//       email: this.state.email,
//       password: this.state.password
//     };

//     this.props.setAuthenticated(true);
//     this.props.fetchUser(formData);

//     // change the navigation links = update the state of isAuthenticated in the parent component
//     this.props.handleAuthentication(true);

//     this.props.history.push('/homepage');
//   };

//   handleChange = e => {
//     e.persist();
//     this.setState(() => ({
//       [e.target.name]: e.target.value
//     }));
//   };
//   notify = () => {
//     toast.success("Logged in Successfully", {
//         position: "top-right",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true, 
//         draggable: true,
//         progress: undefined
//     });
//     this.setState({error:false})
    
//   };
//   errMessage=()=>{
//     if(
       
//         this.state.email=== "" &&
//         this.state.password === "" 
       
//     ){

//         this.setState({error:true})
//     }
// }

//   render() {
//     return (
//       <div>
//         <div className='formheader col-md-6'>
//           <h2>Login </h2>
//           <ToastContainer/>
//           {this.state.error?(<div style={{color:'red' ,textAlign:'center'}}>All fields are required</div>):null}
//           <Form onSubmit={this.handleSubmit}>
//             {this.state.errors && (
//               <p className='formcenter'>{this.state.errors}</p>
//             )}
//             <div>
//               <FormGroup row>
//                 <Label sm={2} className='headerlabel'>
//                   Email :
//                 </Label>

//                 <Col sm={10}>
//                   <Input
//                     type='text'
//                     name='email'
//                     value={this.state.email}
//                     onChange={this.handleChange}
//                     className='form-control'
//                     placeholder='Enter email'
//                   ></Input>
//                 </Col>
//               </FormGroup>
//             </div>
//             <div>
//               <FormGroup row>
//                 <Label sm={2} className='headerlabel'>
//                   Password:
//                 </Label>
//                 <Col sm={10}>
//                   <Input
//                     type='password'
//                     name='password'
//                     value={this.state.password}
//                     onChange={this.handleChange}
//                     className='form-control'
//                     placeholder='your password'
//                   ></Input>
//                 </Col>
//               </FormGroup>
//             </div>
//             <Button color='primary'
//              onClick={
              
//               this.state.email!==""&&
//               this.state.password!==""
//               ?this.notify:this.errMessage}>Submit</Button>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }

// Login.propTypes = {
//   fetchUser: PropTypes.func.isRequired,
//   setAuthenticated : PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   user: state.user.item
// });

// //export default Login
// export default connect(mapStateToProps, { fetchUser,setAuthenticated} )(Login);
