import React from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Register extends React.Component {
    constructor() {
        super()
        this.state={
            username: '', 
            email: '',
            password: '',
            conformpassword:'',
            notice:'',
            error:false
        }
    }

    handleChange = (e) => {
        e.persist() 
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }
    errMessage=()=>{
        if(
            this.state.username ==="" &&
            this.state.email=== "" &&
            this.state.password === "" &&
            this.state.conformpassword=== ""
        ){

            this.setState({error:true})
        }
    }
    notify = () => {
        toast.success("Registered Successfully", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true, 
            draggable: true,
            progress: undefined
        });
        this.setState({error:false})
        
      };

    handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        
    }
    if(this.state.password===this.state.conformpassword) {
        axios.post('http://localhost:3005/users/register', formData)
        .then(response => {
            if(response.data.errors) {
                this.setState(() => ({
                    errors: response.data.errors
                }))
            } else {
                this.props.history.push('/users/login')
            }   
        })
    } else {
        this.setState(()=>({
            notice:'passwords didnot match'
        }))
    }     
} 
    render() 
    {
        return(
            <div>
                <div className="col-md-6 formheader">
                    <h2 className="pt-3 pb-3">Register with us </h2>

                
                    <ToastContainer />
                    {this.state.error?(<div style={{color:'red' ,textAlign:'center'}}>All fields are required</div>):null}
                <Form onSubmit={this.handleSubmit}>
                    <div>
                    <FormGroup row>
                        <Label 
                        className="headerlabel"
                        for="username" 
                        sm={2}>Username:</Label>
                        <Col sm={10}>
                        <Input 
                        type="text" 
                        name="username"
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        className="form-control" 
                        placeholder="min 4 character "
                        ></Input>
                        </Col>
                    </FormGroup>
                    </div>
                    <div>
                    <FormGroup row>
                        <Label sm={2} className="headerlabel">
                            Email :
                        </Label>
                        <Col sm={10}>
                            <Input type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="Enter email">
                                </Input>
                        </Col>
                        </FormGroup>
                    </div>

                    <div>
                        <FormGroup row>
                            <Label sm={2} className="headerlabel">
                                Password:
                            </Label>
                            <Col sm={10}>
                                <Input type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="min 5 character"
                                ></Input>
                            </Col>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup row>
                            <Label sm={2} className="headerlabel">
                            Conform Password:
                            </Label>
                            <Col sm={10}>
                                <Input type="password"
                                    name="conformpassword"
                                    value={this.state.conformpassword}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="Enter  conform password"
                                ></Input>
                            </Col>
                        </FormGroup>
                    </div>
                    {this.state.notice && <p className="text text-danger"> {this.state.notice} </p>}
                    <Button className="submit" color="primary"
                    onClick={
                        this.state.username!==""&&
                        this.state.email!==""&&
                        this.state.password!==""&&
                        this.state.conformpassword!==""?this.notify:this.errMessage
                    }>Submit</Button>
                </Form>
            </div>
        </div> 
        )
    }
}
export default Register