import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["LOTR"]);
  const setCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([...categories, category]);
  };

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory onNewCategory={setCategory} />

      {categories.map((c) => (
         <GifGrid category={c} key={c} />
      ))}
    </>
  );
};

export default GifApp;
