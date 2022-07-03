import React from 'react';
import "./Header.scss";
import flag from "../../assets/images/flag.jpg";
import deutsch from "../../assets/images/deutsch.png";
import france from "../../assets/images/france.jpg";

function HeaderTop() {
  return (
    <div className='header__top'>
      <div className="container d-flex justify-content-between align-items-center">
        <div className='header__top-left d-flex justify-content-between align-items-center'>
          <i className='bx bx-news'></i>
          Add anything here or just remove it...
        </div>
        <div className='header__top-right d-flex align-items-center'>
          <div className='header__top-dropdown'>
            <img src={flag} alt="flag" />
            English
            <ul className='header__top-dropdown-list'>
              <li className="header__top-dropdown-item">
                <button className='header__top-btn'>
                  <img src={deutsch} alt="flag" />
                  Deutsch
                </button>
              </li>
              <li className="header__top-dropdown-item">
                <button className='header__top-btn'>
                  <img src={france} alt="flag" />
                  Français
                </button>
              </li>
              <li className="header__top-dropdown-item">
                <button className='header__top-btn'>
                  Request WPML
                </button>
              </li>
            </ul>
          </div>
          <div className='header__top-dropdown'>
            US Dollar
            <ul className='header__top-dropdown-list'>
              <li className="header__top-dropdown-item">
                <button className='header__top-btn'>
                  Euro (EUR)
                </button>
              </li>
              <li className="header__top-dropdown-item">
                <button className='header__top-btn'>
                  Indian Rupee (INR)
                </button>
              </li>
              <li className="header__top-dropdown-item">
                <button className='header__top-btn'>
                  Pound (GBP)
                </button>
              </li>
            </ul>
          </div>
          <div className='header__top-dropdown'>
            <i className='bx bx-user-circle'></i>
            Login / Register
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
