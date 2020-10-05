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
            
            this.setState(()=>({
                posts:response.data
            }))
        })
        .catch(err=>{console.log(err)})

        axios.get(' https://jsonplaceholder.typicode.com/photos')
        .then(response=>{
            
            this.setState(()=>({
                photos:response.data
            }))
        })
        .catch(err=>{console.log(err)})

    }
    render(){
        return(
           
            <div>
               {this.state.posts.slice(0,100).map(item=>{
                   return <PagesCard  image="https://via.placeholder.com/600/d32776" id={item.id} title={item.title} body={item.body}/>
                   
               })}
               
            </div>
            
        )
    }
}
export default Pages

