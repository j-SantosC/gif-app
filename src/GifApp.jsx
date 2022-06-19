import React from 'react'
import {useState} from 'react'
import { AddCategory } from "./components/AddCategory";


const GifApp = () => {
     const [categories, setCategories] = useState(['LOTR','Pokemon'])
     const setCategory = (category) => {
         if(categories.includes(category)) return
         setCategories([...categories, category])
     }

  return (
    <>
    <h1>GifApp</h1>
    <AddCategory onNewCategory={setCategory} />
    <ol>
        {categories.map( c => {
            return <li key={c}> {c}</li>
        })}
    </ol>
    </>
  )
}

export default GifApp
