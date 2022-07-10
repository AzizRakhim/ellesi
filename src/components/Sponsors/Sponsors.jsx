import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Sponsors.scss';

const sponsors = [
  "https://imgur.com/YMYwJzI.jpg",
  "https://imgur.com/stzdfIz.jpg",
  "https://imgur.com/XS39Kpl.jpg",
  "https://imgur.com/boDyNFY.jpg",
  "https://imgur.com/p0ZDiLW.jpg",
  "https://imgur.com/29ASxVU.jpg",
  "https://imgur.com/p0ZDiLW.jpg"
];

console.log(sponsors);

function Sponsors() {
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    speed: 500,
    autoplay: true,
  }

  return (
    <section className='sponsor'>
      <div className='container'>
        <ul className='sponsor__list'>
          <Slider {...settings}>
            {sponsors.map(item =>{
              return (
                <li>
                  <img src={item} alt='sponsor-img' />
                </li>
              ) 
            })}
          </Slider>
        </ul>
      </div>
    </section>
  )
}

export default Sponsors