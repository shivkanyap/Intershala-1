import React from 'react'
import axios from 'axios'
import AlbumsDetailsCard from './AlbumsCard'


class AlbumDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            photos:[],
            comments:[]
        }
    }
    componentDidMount(){
        
        
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then(response=>{
            
            
            this.setState(()=>({
                photos:response.data.filter((item)=>{
                    return item.albumId==this.props.match.params.id
                })
            }))
        })
        .catch(err=>{console.log(err)})

        

    }

    handleClick=(e)=>{
        this.props.history.push('/albums')
    }
    render(){

        
        return(

            <div>
                <button type='button' onClick={this.handleClick} className="resultbtn">
                    Go back to Albums Page
                </button>

            {this.state.photos.map(item => {
            
            return (
              <AlbumsDetailsCard
                key={item.id}
                id={item.id}
                
                image={item.url}
                title={item.title}
              />
            );
        })}   

                
            </div>
            
        )
    }
}
export default AlbumDetails