import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import useStore from '../../store/store';
import "./Featured.scss";

function FeaturedList() {
  let arr = useStore(state => state.featured);
  let category = useStore(state => state.featuredCategory);

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className={"feature-next-btn"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className='bx bx-chevron-right'></i>
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className={"feature-prev-btn"}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className='bx bx-chevron-left' ></i>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe : false,
    nextArrow : <SampleNextArrow />,
    prevArrow : <SamplePrevArrow />
  }

  let filter = category.filter((item) => item.active === true);

  return (
    <ul className='featured__list d-flex flex-wrap'>
      {
        arr.map((item, index) => {
          return item.category.map((element) => {
            if(element === filter[0].name){
              console.log(element);
              return (
                <li className="featured__item col-3">
                  <div className='featured__item-inner'>
                    <div className='featured__item-img-holder'>
                      <div className='featured__discounts'>
                        {
                          item.discount && <span className='featured__discount'>
                            {
                              item.discount
                            }%
                          </span>
                        }
                        {
                          item.limited && <span className='featured__limited'>
                            {
                              item.limited
                            }
                          </span>
                        }
                      </div>
                      <button className='featured__item-btn'>
                        <i className='bx bx-heart'></i>
                      </button>
                      <Link to={"/df"} className={"featured__unseen-link"} />
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
                        <Slider {...settings} className="featured__s-slider">
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
                    <div className='featured__inner-text-holder'>
                      <Link className='featured__inner-link' to={`/product/${item.name}`}>
                        {
                          item.name
                        }
                      </Link>
                      <div className='featured__inner-price-holder d-flex justify-content-between'>
                        {
                          item.kilos.map((element, idx) => {
                            if(element.active === true){
                              console.log("ok");
                              return (
                                <div>
                                  {
                                    item.oldPrice && <span className='featured__del'>
                                      ${
                                        item.oldPrice.toFixed(2)
                                      }
                                    </span>
                                  }
                                  <span className='featured__inner-price' key={Date.now() + idx}>
                                    ${
                                      element.price.toFixed(2)
                                    }
                                  </span>
                                </div>
                              ) 
                            }
                          })
                        }
                        <ul className='featured__kilo-list d-flex align-items-center'>
                          {
                            item.kilos.map((kilo, indx) => {
                              return (
                                kilo.kg && <li className='featured__kilo-item' key={Date.now() + indx}>
                                  <button className={`featured__kilo-btn ${kilo.active && "featured__kilo-btn--active"}`}>
                                    <img src={kilo.kg} alt={item.name} />
                                  </button>
                                </li>
                                
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              )
            }
          })
        })
      }
    </ul>
  )
}

export default FeaturedList
