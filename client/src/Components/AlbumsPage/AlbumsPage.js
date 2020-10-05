import axios from 'axios';
import React, {  useState, useEffect } from 'react';
import AlbumsCard from './AlbumsCard'

const AlbumsPage = props => {

    const [albumsArray, setAlbumsArray] = useState([]);
  
    useEffect(() => {

        axios.get(' https://jsonplaceholder.typicode.com/albums')
            .then(response=>{
                
                setAlbumsArray(response.data)
            })
            .catch(err=>{console.log(err)})
        
    }, []);

  
    return (
        <div>
            <h1>Listing Albums</h1>

            {albumsArray.map(item => {
                
                return (
                <AlbumsCard
                    key={item.id}
                    id={item.id}
                    image="https://i.picsum.photos/id/772/200/300.jpg?hmac=jap7uDpPOJZv41ksTZ3pa9FnXwuaBUpnni4hYBjZtfM"
                    title={item.title}
                />
                );
            })}      
        
        </div>
    );
};
export default AlbumsPage;