import { Rating } from '@mui/material'
import React from 'react'
import useStore  from '../../store/store'
import './TopRated.scss'

function TopRated() {
  const products = useStore(state => state.featured);
 
  return (
    <section className='top-rated'>
      <div className='container'>
        <ul className='top-rated__list'>
          <h4 className='top-rated__title'>Top rated</h4>
          <h4 className='top-rated__title'>Best selling</h4>
          <h4 className='top-rated__title'>On sale</h4>
          {products.map((item, i) =>{
            if(i < 9){
              return (
                <li key={item.id}>
                  <div className='d-flex'>
                    <div className='top-rated__imgWrapper position-relative'>
                      <img src={item.imgs[0]} alt={item.name} width='80' height='88' />
                      <span className='top-rated__screen d-flex justify-content-center align-items-center'>
                        <i className='bx bx-fullscreen'></i>
                      </span>
                      <div className='top-rated__backdrop'></div>
                    </div>
                    <div className='ms-4'>
                      <h5>{item.name}</h5>
                      <Rating size="small" defaultValue={5} />
                      <p> <del>${item.oldPrice}.00</del> - ${item.price}.00</p>
                    </div>
                  </div>
                </li>
              )
            }
          })}

        </ul>
      </div>
    </section>
  )
}

export default TopRated
