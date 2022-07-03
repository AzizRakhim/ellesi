import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useStore from "../../store/store";
import "./Deal.scss";
import { Link } from "react-router-dom";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds : '00',
  minutes : '00',
  hours : '00',
  days : '00'
}

function Deal({countdownTimestampMs}) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const slider1 = useRef();
  const slider2 = useRef();

  let arr = useStore(state => state.dealOfDay);

  function SampleNextArrow(props) {
    const {style, onClick} = props;

    return (
      <div 
        className={"deal-next-btn"} 
        style={{ ...style, display: "block"}} 
        onClick={onClick}
      >
        Next
        <i className='bx bx-chevron-right'></i>
      </div>
    )
  }  
  
  function SamplePrevArrow(props) {
    const {style, onClick} = props;
    
    return (
      <div 
      className={"deal-prev-btn"} 
      style={{ ...style, display: "block"}} 
      onClick={onClick}
      >
        <i className='bx bx-chevron-left'></i>
        <span>Prev</span>
      </div>
    )  
  }
  
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [countdownTimestampMs])

  function updateRemainingTime (countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return (
    <div className="deal">
      <div className="container d-flex">
        <div className="deal__left col-8">
          <div className="deal__inner-holder">
            <div className="deal__inner-top d-flex align-items-center">
              <div className="deal__inner-title">
                Deal of the Day
              </div>
            </div>
            <hr className="deal__line" />
            <Slider 
              asNavFor={nav2} 
              ref={slider => slider1.current = slider} 
              nextArrow={<SampleNextArrow />} 
              prevArrow={<SamplePrevArrow />}
              infinite={false}
            >
              {
                arr.map((item, index) => {
                  return (
                    <div key={Date.now() + index} className={"deal__main-item d-flex"}>
                      <div className="deal__main-img-box">
                        <Link to={`/product/${item.name}`}>
                          <img src={item.img} alt={item.name} />
                        </Link>
                      </div>
                      <div className="deal__main-info">
                        <div>
                          <Link to={`/category/${item.name}`} className="deal__category-link">
                            {item.category}
                          </Link>
                        </div>
                        <div>
                          <Link to={`/product/${item.name}`} className="product__main-title">
                            {item.name}
                          </Link>
                        </div>
                        <div className="deal__stars">
                          {
                            item.star ? <ul className="deal__star-list">
                              {
                                Array(item.star).fill(0).map((_, i) => {
                                  return (
                                    <li className="deal__star-item" key={Date.now() + i}>
                                      <i className='bx bxs-star'></i>
                                  </li>
                                  )
                                })
                              }
                            </ul> : null
                          }
                        </div>
                        <div className="deal__prices d-flex align-items-center">
                          <div className="deal__old-price">
                            <span>
                              $
                            </span>
                            {
                              item.oldPrice.toFixed(2)
                            }
                          </div>
                          <div className="deal__price">
                            <span>
                              $
                            </span>
                            {
                              item.price.toFixed(2)
                            }
                          </div>
                        </div>
                        <div className="deal__timer d-flex align-items-center">
                          <div className="deal__timer-boxes">
                            <span className="deal__num">
                              {
                                remainingTime.days
                              }
                            </span>
                            days
                          </div>
                          <div className="deal__timer-boxes">
                            <span className="deal__num">
                              {
                                remainingTime.hours
                              }
                            </span>
                            hours
                          </div>
                          <div className="deal__timer-boxes">
                            <span className="deal__num">
                              {
                                remainingTime.minutes
                              }
                            </span>
                            mins
                          </div>
                          <div className="deal__timer-boxes">
                            <span className="deal__num">
                              {
                                remainingTime.seconds
                              }
                            </span>
                            secs
                          </div>
                        </div>
                        <div className="deal__range">
                          <div className="deal__range-info d-flex align-items-center justify-content-between">
                            <div className="deal__range-nums">
                              already sold:
                              <span>
                                {item.sold}
                              </span>
                            </div>
                            <div className="deal__range-nums">
                              Available:
                              <span className="deal__333">
                                {item.available}
                              </span>
                            </div>
                          </div>
                          <div className="deal__progress">
                            <span className="deal__inner-progress" style={{width : `${Math.round((item.sold * 100) / (item.sold + item.available))}%`}}></span>
                          </div>
                          <div>
                            <button className="deal__cart-btn">
                              add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }    
            </Slider>
          </div>
        </div>
        <div className="deal__vertical-slider">
          <Slider 
            asNavFor={nav1} 
            ref={slider => slider2.current = slider} 
            slidesToShow={4} 
            swipeToSlide={true} 
            focusOnSelect={true} 
            vertical={true} 
            verticalSwiping={true} 
            infinite={false}
            className={"deal__vertical-list"}
          >
            {
              arr.map((item, index) => {
                return (
                  <div key={Date.now() + index} className="deal__vertical-item">
                    <div className="deal__vertical-holder d-flex">
                      <div className="deal__vertical-img-holder">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div>
                        <p className="deal__vertical-name">
                          {item.name}
                        </p>
                        <p className="deal__vertical-price">
                          <del>
                            ${item.oldPrice.toFixed(2)}
                          </del>
                          <span className="deal__vertical-price--red">
                            ${item.price.toFixed(2)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Deal;