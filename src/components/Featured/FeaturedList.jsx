import React from 'react';
import Slider from 'react-slick';
import useStore from '../../store/store';
import "./Featured.scss";

function FeaturedList() {
  let arr = useStore(state => state.featured);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <ul className='featured__list d-flex flex-wrap'>
      {
        arr.map((item, index) => {
          return (
            <li className="featured__item col-3">
              <div className='featured__item-inner'>
                <div className='featured__item-img-holder'>
                  <button className='featured__item-btn'>
                    <i className='bx bx-heart'></i>
                  </button>
                  <ul className='featured__info-list'>
                    <li className="featured__info-item">
                      <button className='featured__info-btn'>
                        <i className='bx bx-shopping-bag'></i>
                      </button>
                    </li>
                    <li className="featured__info-item">
                      <button className='featured__info-btn featured-bn'>
                        <i className='bx bx-low-vision'></i>
                      </button>
                    </li>
                    <li className="featured__info-item">
                      <button className='featured__info-btn featured-rbr'>
                        <i className='bx bx-refresh'></i>
                      </button>
                    </li>
                  </ul>
                  <div className='featured__item-slider w-100'>
                    <Slider {...settings}>
                      {
                        item.imgs.map((el, i) => {
                          return (
                            <div className='featured__inner-img-holder w-100' key={Date.now() + i}>
                              <img src={el} alt={item.name} />
                            </div>
                          )
                        })
                      }
                    </Slider>
                  </div>
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default FeaturedList
