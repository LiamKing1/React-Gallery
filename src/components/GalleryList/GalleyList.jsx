import React from "react";
import './GalleryList.css';

function GalleryList({newGallery}) {

    return(
        
        <div>
            { newGallery.map((galleryItems) => {
                <GalleryList
                galleryItems = {galleryItems.id}/>
            })
        }
            {/* <GalleryList /> */}

            <p> We are in GalleryList, fasho! </p>
        </div>
    )
}

export default GalleryList;