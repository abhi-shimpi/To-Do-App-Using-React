import React from 'react';
import './Style.css';
import Menu from './Menu';
import { useState } from "react"
import CardMenu from './CardMenu';
import './Style.css';
import NavBar from './NavBar';

const Restaurant = () => {
  const [menudata, setMenuData] = useState(Menu);

  const uniqueCategory = [
    ... new Set(
      Menu.map((ele) => {
        return ele.category;
      })
    ),
    "All"
  ]
  // console.log("uniqueCategory", uniqueCategory);

  const categoryHandler = (category) => {
    if(category === "All"){
      setMenuData(Menu);
      return;
    }
    const updatedCategory = Menu.filter((element) => {
      return element.category === category;
    })
    setMenuData(updatedCategory);
  }
  return (
    <>
      <NavBar categoryHandler={categoryHandler} uniqueCategory={uniqueCategory} />
      <CardMenu menudata={menudata} />
    </>
  )
};
export default Restaurant;