import React from 'react';
import { Link } from 'react-router-dom';
import "./Shop.scss";
import uz from "../../assets/images/uz.svg";

function Shop() {
  const imgHandler = () => {
    console.log("asdf");
  }
  
  return (
    <div className='shop'>
      <div className="container">
        <ul className='shop__list d-flex'>
          <li className="shop__item col-4">
            <div className='shop__img-wrapper'>
              <img src="https://imgur.com/HWZhz5V.jpg" alt="shop" />
              <div className='shop__text-wrapper'>
                <h3 className='shop__title'>
                  joobie <br /> ice cream
                </h3>
                <p className='shop__text'>
                  sale off <span>25%</span>
                </p>
                <Link to={"/product/name"} className="shop__link">
                  shop now
                </Link>
              </div>
            </div>
          </li>
          <li className="shop__item col-4">
            <div className='shop__img-wrapper'>
              <img src="https://imgur.com/wnI35yw.jpg" alt="shop" />
              <div className='shop__text-wrapper'>
                <h3 className='shop__title'>
                  fresh <br /> guava juice
                </h3>
                <Link to={"/product/name"} className="shop__link">
                  shop now
                </Link>
              </div>
            </div>
          </li>
          <li className="shop__item col-4">
            <div className='shop__img-wrapper'>
              <img src="https://imgur.com/b2LUd8N.jpg" alt="shop" />
              <div className='shop__text-wrapper'>
                <h3 className='shop__title'>
                  fresh <br /> vegetables
                </h3>
                <Link to={"/product/name"} className="shop__link">
                  shop now
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Shop
