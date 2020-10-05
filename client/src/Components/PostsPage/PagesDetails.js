import React from 'react'
import axios from 'axios'
import PagesCard from './PagesCard'

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
        //console.log(id,'hhyy')
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            console.log(response.data,'in res')
            this.setState(()=>({
                posts:response.data
            }))
        })
        .catch(err=>{console.log(err)})

        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(response=>{
            console.log(response.data,'in cccc')
            this.setState(()=>({
                comments:response.data
            }))
        })
        .catch(err=>{console.log(err)})

    }
    render(){
        console.log(this.state.comments,'pics',this.props.match.params.id)
        return(

            <div>
                <h1>Comments</h1>
                { this.state.comments.filter(((item)=>item.postId == this.props.match.params.id)).map(item=>{
                    return (
                        <p>{item.body}</p>
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

