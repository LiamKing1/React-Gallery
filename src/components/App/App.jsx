import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleyList.jsx';
// import GalleryItem from '../GalleryItem.jsx';
import './App.css';

function App() {
  const [newGallery, setNewGallery] = useState([]);

  useEffect(() => {
    getGallery();
  }, [])

  const getGallery = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then((result) => {
      console.log('In GET request', result.data);
      setNewGallery(result.data);
    }).catch((error) => {
      console.log('You have an error in your GET request', error);
      alert('Problem with GET request');
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of a Wonderful trip to Barcelona, Spain!</h1>
        </header>
        {/* <img src="images/MiddleofTheCity.jpg"/> */}
        <GalleryList
        newGallery = {newGallery}
        getGallery = {getGallery} />
        {/* <GalleryList 
        newGallery = {newGallery} /> */}
      </div>
    );
}

export default App;
