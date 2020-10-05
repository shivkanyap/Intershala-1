import React from 'react'
import axios from 'axios'
import PagesCard from './PagesCard'

class Pages extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[],
            photos:[]
        }
    }
    componentDidMount(){
        axios.get(' https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response.data,'in res')
            this.setState(()=>({
                posts:response.data
            }))
        })
        .catch(err=>{console.log(err)})

        axios.get(' https://jsonplaceholder.typicode.com/photos')
        .then(response=>{
            console.log(response.data,'in res')
            this.setState(()=>({
                photos:response.data
            }))
        })
        .catch(err=>{console.log(err)})


    }
    render(){
        console.log(this.state.photos,'pics')
        return(
            // console.log(this.state.posts,'in post')
            <div>
               {this.state.posts.slice(0,100).map(item=>{
                   return <PagesCard  image="https://via.placeholder.com/600/d32776" id={item.id} title={item.title} body={item.body}/>
                   
               })}
               {/* {
                        this.state.photos.slice(0,100).map(item=>{
                            return <PagesCard image={item.url} id={item.id} title={item.title}/>
                        })
                } */}


            </div>
            
        )
    }
}
export default Pages

// import React, { Component } from 'react'
// import axios from 'axios' 
// import { ToastContainer, toast } from "react-toastify";  
// import "react-toastify/dist/ReactToastify.css";
// import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './reservation.css';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import  {fetchUser}  from '../../actions/userActions';

// class CreateReservation extends Component {
    
    

//     constructor(props){
//         super(props)
//         this.state={
//             service:'',
//             servicesArray:['Hair Cut','Face Wash','Face-De-Tan','Make-Up'],
//             date:'',
//             timeSlot:'',
//             message:'',
//             mobile:'',
//             username:'',
//             slotArrayInitial:['10-11','11-12','12-1','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
//             slotArray1:[],
//             loggedInUserId:'',
//             error:false,
//             notice:''      
//         }
        
//     }

//     componentWillMount() {
//         //console.log('hh',fetchUser())
//         this.props.fetchUser();
//         //fetchUser()
//     }

//     errMessage=()=>{
//         if(
//             this.state.service ==="" &&  
//             this.state.mobile === "" &&
//             this.state.date===""&&
//             this.state.timeSlot===""&&
//             this.state.mobile.length===10
//         ){
//             this.setState({error:true})

//         }
//     }
//     componentDidMount(){
//         // axios.get('http://localhost:3005/users/loggedinuser',{
//         //     headers:{
//         //         'x-auth':localStorage.getItem('token')
//         //     }
//         // })

//         // .then((response)=>{
//         //     this.setState(()=>({
//         //         loggedInUserId:response.data._id
//         //     }))
//         // })


//         // .catch(err=>console.log(err))
//         //console.log('hh',fetchUser())
        

//     }

    

  
//     handleChange=(e)=>{
//         e.persist()
//         this.setState(()=>({
//             [e.target.name]:e.target.value
//         }))
//     }


//     handleDateChange=(e)=>{
//         e.persist()
//         const date=e.target.value
//         this.setState({date},function(){
//             const formData={
//                 date:this.state.date
//             }
               
//             axios.post(`http://localhost:3005/reservation/find-slots`,formData,{
//                 headers:{
//                     'x-auth':localStorage.getItem('token')
//                 }
//             })
//             .then(response=>{
//                 this.setState(()=>({
//                     //slotsOnDate:response.data,
//                     slotArray1:this.state.slotArrayInitial.filter(function(item){
//                         return response.data.indexOf(item)===-1
//                     })
                    
//                 }))
                
        
//             })
//         }
//         )        

//     }

//     handleSubmit=(e)=>{
//         e.preventDefault()
        
//         if(this.state.mobile.length!==10){
//             this.setState({
//                 notice:'mobile number must be of 10 digits'
//             })

//             setTimeout(()=>{
//                 this.setState({notice:''})

//             },2000)
//             return
//         }
//         const formData={
//             date:this.state.date,
//             service:this.state.service,
//             timeSlot:this.state.timeSlot,
//             message:this.state.message,
//             username:this.state.loggedInUserId,
//             mobile:this.state.mobile

//         }

//         axios.post(`http://localhost:3005/reservation/create`,formData,{
//             headers:{
//                 'x-auth':localStorage.getItem('token')
//             }
//         })
//         .then(response=>{
          
            
//             if(response.data.error){
              
//                 this.setState(()=>({
//                     date:'',timeSlot:'',message:'',mobile:'',username:'',service:''
//                 }))


//             }else{
                
                
//                 this.setState(()=>({
//                     date:'',timeSlot:'',message:'',mobile:'',username:'',service:''
//                 }))
//                 this.props.history.push('/reservation/view')

                
//             }
 
//         })
//         .catch(err=>{
//             console.log(err)
//         })

//     }
//     notify = () => {
//         toast.success("Request Sent Successfully", {
//             position: "top-right",
//             autoClose: 4000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined
//         });
//         this.setState({error:false})
        
//       };

//     render() {
       
        
//         return (
            
//             <div>
                
//                 <h1 className="pt-3">Reservation form</h1>
//                 <ToastContainer />
//                 <div className="col-md-8">
//                 {this.state.error?(<div style={{color:'red' ,textAlign:'center'}}>All fields are required</div>):null}<br/>
//                     <Form onSubmit={this.handleSubmit}>
//                         <div>

//                             <div>
//                                 <FormGroup row>
//                                     <Label sm={2} className="headercolor">
//                                         Mobile : 
//                                     </Label>
//                                     <Col sm={10}>
//                                         <Input type="text"
//                                             name="mobile"
//                                             value={this.state.mobile}
//                                             onChange={this.handleChange}
//                                             className="form-control"
//                                             placeholder="10 digit number"
//                                         ></Input>
//                                     </Col>
//                                 </FormGroup>
//                             </div>
//                         {this.state.notice && <p style={{color:'red' ,textAlign:'center'}}> {this.state.notice} </p>}
//                             <div>
//                                 <FormGroup row>
//                                     <Label sm={2} className="headercolor">
//                                         Service :
//                                     </Label>
//                                     <Col sm={10}>
//                                         <Input  type="select" value={this.state.service} name="service" onChange={this.handleChange}>
//                                             <option value="">select</option>
//                                             {
//                                                 this.state.servicesArray.map((item)=>{
//                                                     return <option key={item} value={item}>{item}</option>
//                                                 })
//                                             }
//                                         </Input>
//                                     </Col>
//                                 </FormGroup>
//                             </div>
//                             <div>
//                                 <FormGroup row>
//                                 <Label sm={2} className="headercolor">
//                                     Date :
//                                 </Label>
//                                     <Col sm={5}>
//                                     <Input type="date"
//                                         name="date"
//                                         value={this.state.date}
                                        
//                                         onChange={this.handleDateChange}
//                                         className="form-control"
//                                         placeholder="person email"
//                                     > 
//                                     </Input>
//                                     </Col>
//                                 </FormGroup>
//                             </div>

//                             <div>
//                                 <FormGroup row>
//                                 <Label sm={2} className="headercolor">
//                                     Available Time Slots :
//                                 </Label>
//                                 <Col sm={10}>
//                                     <Input type="select" value={this.state.timeSlot} name="timeSlot" onChange={this.handleChange}>
//                                         <option value="">select</option>
//                                         {
//                                             this.state.slotArray1.map((slot)=>{
//                                                 return <option key={slot} value={slot}>{slot}</option>
//                                             })
//                                         }
//                                     </Input>
//                                 </Col>
//                                 </FormGroup>
//                             </div>

//                             <div>
//                                 <FormGroup row>
//                                     <Label sm={2} className="headercolor">
//                                         Note (If Any):
//                                     </Label>
//                                     <Col sm={5}>
//                                         <Input
//                                         type="textarea"
//                                         value={this.state.message}
//                                         onChange={this.handleChange}
//                                         name="message">
//                                         </Input>
//                                     </Col>
//                                 </FormGroup>
//                             </div>

//                             <Button type="submit" color="primary" size="sm"  onClick={
//                                 this.state.mobile!==""&&
//                                 this.state.date!==""&&
//                                 this.state.service!==""&&
//                                 this.state.timeSlot!==""&&
//                                 this.state.mobile.length===10
//                                 ?this.notify
//                                 :this.errMessage

//                             }>
//                             Submit
//                             </Button>

                          
//                         </div>
//                     </Form>
//                 </div>
                
//             </div>
//         )
//     }
// }

// CreateReservation.propTypes = {
//     fetchUser: PropTypes.func.isRequired,
//     //user: PropTypes.array.isRequired,
//     //newPost: PropTypes.object
// };
  
// const mapStateToProps = state => ({
//     user: state.user.item
// });
// export default connect(mapStateToProps, { fetchUser })(CreateReservation);
