import React from 'react'
import axios from 'axios'
import "../../app.css"
class Home extends React.Component{


    constructor(){
        super()
        this.state={
            homepage:{}
        }
    }

    componentDidMount(){
        axios.get('https://api.nasa.gov/planetary/apod?api_key=YZUZH1CMQvy0xjPEgGyekg3qhsPtbIlfAYRcdp3z')
        .then(response=>{
            console.log(response.data)
            this.setState(()=>({
                homepage:response.data
            }))
        })
        .catch(err=>{
            console.log(err)
        })

    }
    render(){
        console.log(this.state.homepage,'innn ')
        return(
            <div style={{backgroundImage:`url(${this.state.homepage.url})` ,
           }} className="imge">
                
                {/* <img src={this.state.homepage.url} alt="APOd od today" / > */}
                <h4 className="hometext">{this.state.homepage.explanation}</h4>
                
            </div>
        )
    }
}
export default Home
