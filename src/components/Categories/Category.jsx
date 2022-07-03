import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Category.scss";
import useStore from '../../store/store';
import {Link} from "react-router-dom";

function Category() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"slider-btn"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className='bx bx-chevron-left' ></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"prev-btn"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className='bx bx-chevron-right' ></i>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  const arr = useStore((state) => state.topCategory);

  return (
    <div className='category'>
      <div className="container">
        <h2 className='category__title'>
          top categories
        </h2>
        <div className='category__slider'>
          <Slider {...settings}>
            {
              arr.map((item, index) => {
                return (
                  <Link 
                    to={`/category/${item.name}`}
                    className="category__tdn"
                    key={Date.now() + index}
                  >
                    <div className='category__item-holder'>
                      <div className='category__img-holder'>
                        <img src={item.img} alt={item.name} />
                      </div>
                      <h3 className='category__item-title'>
                        {item.name}
                      </h3>
                    </div>
                  </Link>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Category
