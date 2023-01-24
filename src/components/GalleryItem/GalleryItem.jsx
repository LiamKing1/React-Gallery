import React, { useState } from 'react';
import Axios from 'axios';
import '../GalleryItem/GalleryItem.css';

// function GalleryItem({newGallery}) {
function GalleryItem({ getGallery, photo }) {

    const [swapImage, letsSwapImage] = useState(true)

    const swapFunction = () => {
        letsSwapImage(!swapImage);
    }

    const controlSwap = () => {
        if (swapImage) {
            return <img src={photo.path}></img>
        } else {
            return <p> {photo.description} </p>
        }
    }

    const updateLikes = (id) => {
        Axios({
            method: 'PUT',
            url: `/gallery/like/${id}`,
        }).then(() => {
            console.log('In likeGallery, the PUT request');
            getGallery();
        }).catch((error) => {
            console.log('You have an error in your "likeGallery", PUT request', error);
            alert('Problem with PUT request');
        })
    }


    return (

        <>

            <div className='column'>

                <img src={photo.path} onClick={() => console.log(photo.description)}/>
                
                {/* <p className='scription'> {photo.description} </p> */}
                <p> Likes: {photo.likes} </p>
                <p className="butClick">
                    <button style={{ width: '200px', height: '50px', }}
                        onClick={() => updateLikes(photo.id)} > LIKE </button>
                </p>

            </div>
        </>
    )
}

export default GalleryItem;