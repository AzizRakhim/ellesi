import React from 'react'
import { NavLink } from 'react-router-dom';

function HeaderNav() {
  return (
    <div className='header__nav'>
      <div className="container d-flex align-items-center">
        <div className='header__categories'>
          <i className='bx bx-menu'></i>
          browse categories
          <ul className='header__nav-category-list'>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link justify-content-between'>
                <div className='d-flex align-items-center'>
                  <i className='bx bx-lemon bx-first'></i>
                  Fruits
                </div>
                <i className='bx bx-chevron-right'></i>
              </a>
            </li>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link justify-content-between'>
                <div>
                  <i className='bx bxl-mongodb'></i>
                  Vegetables
                </div>
                <i className='bx bx-chevron-right'></i>
              </a>
            </li>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link justify-content-between'>
                <div>
                  <i className='bx bx-bowl-rice'></i>
                  Drinks
                </div>
                <i className='bx bx-chevron-right'></i>
              </a>
            </li>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link'>
                <div>
                  <i className='bx bx-bowl-hot'></i>
                  Butter & Egges
                </div>
              </a>
            </li>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link'>
                <div>
                  <i className='bx bxs-tree'></i>
                  Trees
                </div>
              </a>
            </li>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link'>
                <div>
                  <i className='bx bx-cake'></i>
                  Cakes
                </div>
              </a>
            </li>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link'>
                <div>
                  <i className='bx bx-bone'></i>
                  Meats
                </div>
              </a>
            </li>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link'>
                <div>
                  <i className='bx bx-water' ></i>
                  Fish
                </div>
              </a>
            </li>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link'>
                <div>
                  <i className='bx bx-circle'></i>
                  Onions
                </div>
              </a>
            </li>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link'>
                <div>
                  <i className='bx bx-leaf'></i>
                  Grapes
                </div>
              </a>
            </li>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link'>
                <div>
                  <i className='bx bx-baguette'></i>
                  Banana
                </div>
              </a>
            </li>
            <li className="header__nav-category-item">
              <a href="#" className='header__category-link bbn'>
                <div>
                  <i className='bx bx-dish'></i>
                  Potatoes
                </div>
              </a>
            </li>
          </ul>
        </div>
        <nav className='header__real-nav'>
          <ul className='header__nav-list d-flex align-items-center'>
            <NavLink className={({isActive}) => (isActive ? "header__nav-link navbar__active" : "header__nav-link")} to={"/"}>
              <li className="header__nav-item">
                home
                <i className='bx bx-chevron-down'></i>
              </li>
            </NavLink>
            <NavLink className={({isActive}) => (isActive ? "header__nav-link navbar__active" : "header__nav-link")} to={"/shop"}>
              <li className="header__nav-item">
                shop
                <i className='bx bx-chevron-down'></i>
              </li>
            </NavLink>
            <NavLink className={({isActive}) => (isActive ? "header__nav-link navbar__active" : "header__nav-link")} to={"/elements"}>
              <li className="header__nav-item">
                elements
                <i className='bx bx-chevron-down'></i>
              </li>
            </NavLink>
            <NavLink className={({isActive}) => (isActive ? "header__nav-link navbar__active" : "header__nav-link")} to={"/pages"}>
              <li className="header__nav-item">
                pages
                <i className='bx bx-chevron-down'></i>
              </li>
            </NavLink>
            <NavLink className={({isActive}) => (isActive ? "header__nav-link navbar__active" : "header__nav-link")} to={"/vendors"}>
              <li className="header__nav-item">
                vendors
                <i className='bx bx-chevron-down'></i>
              </li>
            </NavLink>
          </ul>
        </nav>
        <div className='header__nav-tel-box'>
          <a className='header__nav-tel' href="tel:+01800345688">
            <i className='bx bx-headphone'></i>
              (+01)-800-3456-88
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderNav
