import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import GalleryList from '../GalleryList.jsx';
// import GalleryItem from '../GalleryItem.jsx';
import './App.css';

function App() {
  const [newGallery, setNewGallery] = useState([]);
  const [newPath, setNewPath] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newLike, setNewLike] = useState('')


  useEffect = (() => {
    getGallery();
  }, [])

  function getGallery() {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((result) => {
      console.log('In GET request', result.data);
      setNewGallery();
    }).catch((error) => {
      console.log('You have an error in your GET request', error);
    })
  }

  function likeGallery() {

    const statusUpdate = ({
      path: newPath,
      description: newDescription,
      like: newLike
    })

    axios({
      method: 'PUT',
      url: `/gallery/${statusUpdate}`,
    }).then(() => {
      console.log('In likeGallery, the PUT request');
      getGallery();
      setNewPath('');
      setNewDescription('');
      setNewLike('');
    }).catch((error) => {
      console.log('You have an error in your "likeGallery", PUT request', error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>

        {/* <GalleryItem /> */}
        {/* <GalleryList /> */}
      </div>
    );
}

export default App;
