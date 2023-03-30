import React, { useState } from 'react';
import Menu from './Menu';
import './Style.css';


const CardMenu = ({ menudata }) => {
// console.log("MenuData",menudata);
  return (
    <>
      <section className="main-card--cointainer">
        {
          menudata.map(currEle=> 
              <div key={currEle.id} className="card-container">
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{currEle.id}</span>
                    <span className="card-author subtle">{currEle.category} </ span>
                    <h2 className="card-title"> {currEle.name} </h2>
                    <span className=" card-description subtle">
                      {currEle.description}
                    </span>
                    <div className="card-read">{currEle.price}</ div>
                  </div>
                  <img src={currEle.image} alt="images" className="card-media subtle" />
                  <span className="card-tag">Order Now</span>
                </div>
              </div>
          )
       }
      </section>
    </>
  )
}

export default CardMenu