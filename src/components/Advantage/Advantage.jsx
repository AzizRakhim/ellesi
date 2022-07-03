import React from 'react';
import { useState } from 'react';
import "./Advantage.scss";

function Advantage() {
  let [className, setClassName] = useState("");
  let [className2, setClassName2] = useState("");
  let [className3, setClassName3] = useState("");
  let [className4, setClassName4] = useState("");
  return (
    <div className='advantage'>
      <div className="container">
        <ul className='advantage__list d-flex'>
          <li 
            className={`advantage__item col-3`} 
            onMouseEnter={() => setClassName("bx-tada")}
            onMouseLeave={() => setClassName("")}
          >
            <div className='advantage__icon-box'>
              <i className={`bx bxs-plane-alt ${className}`} ></i>
            </div>
            <h3 className='advantage__title'>
              free shipping
            </h3>
            <p className='advantage__text'>
              Free Shipping for all US order
            </p>
          </li>
          <li 
            className="advantage__item col-3"
            onMouseEnter={() => setClassName2("bx-tada")}
            onMouseLeave={() => setClassName2("")}
          >
            <div className='advantage__icon-box'>
              <i className={`bx bx-headphone ${className2}`} ></i>
            </div>
            <h3 className='advantage__title'>
              support 24/7
            </h3>
            <p className='advantage__text'>
              We support 24h a day
            </p>
          </li>
          <li 
            className="advantage__item col-3"
            onMouseEnter={() => setClassName3("bx-tada")}
            onMouseLeave={() => setClassName3("")}
          >
            <div className='advantage__icon-box'>
              <i className={`bx bx-refresh ${className3}`} ></i>
            </div>
            <h3 className='advantage__title'>
              100% money back
            </h3>
            <p className='advantage__text'>
              You have 30 days to Return
            </p>
          </li>
          <li 
            className="advantage__item col-3"
            onMouseEnter={() => setClassName4("bx-tada")}
            onMouseLeave={() => setClassName4("")}
          >
            <div className='advantage__icon-box'>
              <i className={`bx bx-gift ${className4}`} ></i>
            </div>
            <h3 className='advantage__title'>
              payment secure
            </h3>
            <p className='advantage__text'>
              We ensure secure payment
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Advantage
