import React from "react";
import { GetGifs } from "../helpers/GetGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])
    const getImages =  async() =>{
        const newImages = await GetGifs(category)
        setImages(newImages)
    }
    useEffect(() => {
        getImages();
    }, [])
    
  return (
    <>
      <h3>{category}</h3>
    <div className="card-grid">
        {images.map(img =>{
            return <GifItem key={img.id} {...img}/>
        })}
     </div>
    </>
  );
};
