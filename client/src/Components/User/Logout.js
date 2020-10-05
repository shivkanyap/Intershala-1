import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  {logoutUser}  from '../../actions/userActions';
import {setAuthenticated} from '../../actions/userActions';
import React, { useEffect, Component } from 'react'

const Logout =(props)=>  {
     
        
        useEffect(()=>{
            props.setAuthenticated(false)
            props.logoutUser()
            props.handleAuthentication(false)
            props.history.push('/')
                
        },[])
    
        return (
            <div>
               
            </div>
        )
    
}


Logout.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    setAuthenticated:PropTypes.func.isRequired
};
  
const mapStateToProps = state => ({
user: state.user.item
});
export default connect(mapStateToProps, { logoutUser ,setAuthenticated})(Logout);