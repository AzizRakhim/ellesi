import React from 'react'
import './Footer.scss'
import mainLogo from '../../assets/images/organic-logo.png';
import { Link } from 'react-router-dom'
import "./Footer.scss";


function Footer() {
  return (
    <>
    <footer className='footer'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='footer__left'>
            <ul className='footer__list'>
              <li>
                <Link to='/'>
                  <img src={mainLogo} alt="footer-logo" />
                </Link>
                <ul className='footer__address mt-5'>
                  <li>Calista Wise 7292 Dictum Av.</li>
                  <li>Antonio, Italy.</li>
                  <li>
                    <a href="tel:0000">(+01)-800-3456-88</a>
                  </li>
                  <li>
                    <a href="mailto:">nasathemes@gmail.com</a>
                  </li>
                  <li>
                    <a href="mailto:">elessi.nasatheme.com</a>
                  </li>
                </ul>
              </li>

              <li>
                <ul className='e-none'>
                  <li>
                    <ul className='fruit-info__socialMedia d-flex e-none'>
                      <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Twitter" href="#" >
                          <i className='bx bxl-twitter' ></i>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Facebook" href="#">
                          <i className='bx bxl-facebook' ></i>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Email to your friends" href="#">
                          <i className='bx bx-envelope' ></i>
                        </a>
                      </li>
                      <li>
                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Email to your friends" href="#">
                          <i className='bx bxl-instagram' ></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul className='footer__links mt-5 e-none'>
                  <li><a href="#">Delivery Information</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Condition</a></li>
                  <li><a href="#">Search Terms</a></li>
                  <li><a href="#">Order & Return</a></li>
                </ul>
              </li>
            </ul>

          </div>

          <div className='footer__right'>
            <div className='d-flex align-items-start'>
              <div className='d-flex flex-column'>
                <h5>Newsletter</h5>
                <ul className='footer__links mt-5 e-none'>
                  <li><a href="#">Customer Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Condition</a></li>
                  <li><a href="#">Best Seller</a></li>
                  <li><a href="#">Manufactures</a></li>
                </ul>
              </div>

              <div className='d-flex flex-column align-items-end ms-5'>
                <div className='footer__inputWrapper d-flex'>
                  <input className='footer__input' type="text" placeholder='Enter you email here' />
                  <button>Subscribe</button>
                </div>

                <ul className='footer__date mt-5 e-none'>
                  <li className='d-flex justify-content-between'>
                    <p>Monday-Friday</p>
                    <p>8:00-20:00</p>
                  </li>
                  <li className='d-flex justify-content-between'>
                    <p>Saturday</p>
                    <p>9:00-21:00</p>
                  </li>
                  <li className='d-flex justify-content-between'>
                    <p>Sunday</p>
                    <p>13:00-22:00</p>
                  </li>
                </ul>
                <img className='mt-3' src={"https://imgur.com/iAjn6sw.jpg"} alt="payment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className='container'>
      <div className='d-flex justify-content-between pt-3'>
        <p>© 2022 Nasatheme - All Right reserved!</p>
        <ul className='footer__links d-flex e-none'>
          <li className='me-4'><a href="#">Privacy & Cookies </a></li>
          <li className='me-4'><a href="#">Terms & Condition</a></li>
          <li className='me-4'><a href="#">Accessibility </a></li>
          <li className='me-4'><a href="#">Store Directory</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </div>
      
    </div>
    </>
  )
}

export default Footer






