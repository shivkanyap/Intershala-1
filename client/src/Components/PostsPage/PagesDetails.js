import React from 'react'
import axios from 'axios'


class PagesDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            comments:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
           
            this.setState(()=>({
                posts:response.data
            }))
        })
        .catch(err=>{console.log(err)})

        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(response=>{
           
            this.setState(()=>({
                comments:response.data
            }))
        })
        .catch(err=>{console.log(err)})

    }
    render(){
        return(

            <div>
                <h1>Comments</h1>
                { this.state.comments.filter(((item)=>item.postId ===this.props.match.params.id)).map(item=>{
                    return (
                        <p>*  {item.body}</p>
                    )
                   
                    })
                }

                <h1>Body</h1>
                {this.state.posts.body}
                
            </div>
            
        )
    }
}
export default PagesDetails

