import React from "react";
import {  useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({target}) =>{
      setInputValue(target.value)
    }
    const onSubmit = (ev) =>{
        ev.preventDefault();
        onNewCategory(inputValue.trim())
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Search for Gifs" value={inputValue} onChange={onInputChange}/>
    </form>
  );
};
