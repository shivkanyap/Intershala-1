import axios from 'axios';
import PagesCard from '../PostsPage/PagesCard';
import React, {  useState, useEffect } from 'react';
import  "../../app.css"

const ImagesPage = props => {
  const [images, setImages] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [isLoaded, setIsloaded] = useState(false);
  let [counter]=useState(0)

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=london&client_id=zt5NMD1wGH5Vpeuipz0RaMY4a7L8yFGFfKcJTXUgD2U`,
        {
          headers: {
            'x-auth': localStorage.getItem('token')
          }
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    e.persist();
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = keyword;
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=zt5NMD1wGH5Vpeuipz0RaMY4a7L8yFGFfKcJTXUgD2U&per_page=30`,
        {
          headers: {
            'x-auth': localStorage.getItem('token')
          }
        }
      )
      .then(response => {
        
        setIsloaded(true);
        setImages(response.data.results)
        
      })
      .catch(err => console.log(err));
  };

  const handleClick=(e)=>{
    
    setKeyword('')
    setIsloaded(false)
  }

  return (
    <div>
      
      {isLoaded ? (

        <div>
            {<h1 className="result">Search results for {keyword}</h1> }
            <button type="button" onClick={handleClick} className="resultbtn">Go back to search</button>
        {
            

            images.map(item=>{
                counter=counter+1
                return <PagesCard  id={counter} image={item.urls.small}  title={item.alt_description}/>
                
            })
        }
        </div>

        
      ) : (
        <div className='row search pt-4 ml-3'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>
                Search keyword
                <input
                  type='text'
                  size="xl"
                  name='keyword to search'
                  value={keyword}
                  onChange={handleChange}
                  className='form-control'
                  placeholder='enter search keyword'
                />
              </label>
            </div>

            <input type='submit' className='btn btn-primary' />
          </form>
        </div>
      )}
    </div>
  );
};
export default ImagesPage;
