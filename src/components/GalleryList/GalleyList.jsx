import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({ newGallery, getGallery }) {

    return (

        <div className="galList">
            {/* <h1>OH, HOW BEAUTIFUL BARCELONA IS!</h1> */}
            {newGallery.map((photo) => {
                return(
                <GalleryItem
                    key = {photo.id}
                    photo = {photo} 
                    getGallery = {getGallery}/>
            )})
            }
            {/* <GalleryList /> */}
        </div>
    )
}

export default GalleryList;