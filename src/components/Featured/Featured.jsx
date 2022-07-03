import React from 'react';
import useStore from '../../store/store';
import "./Featured.scss";
import FeaturedList from './FeaturedList';

function Featured() {
  const category = useStore(state => state.featuredCategory);
  const arr = useStore(state => state.featured);

  let activeHandler = useStore(state => ((elId) => state.activeHandler(elId)));

  const categoryHandler = (elId) => {
    activeHandler(elId)
  }

  return (
    <div className='featured'>
      <div className="container">
        <h2 className='featured__title'>
          featured products
        </h2>
        <div className='featured__category-holder'>
          <ul className='featured__category-list d-flex align-items-center justify-content-center'>
            {
              category.map((item, index) => {
                return (
                  <li className='featured__category-item' key={Date.now() + index}>
                    <button className={`featured__category-btn ${item.active && "featured__category-btn--active"}`} onClick={() => categoryHandler(item.id)}>
                      <div className='featured__category-icon-box'>
                        {
                          <i className={`bx ${item.icon}`}></i>
                        }
                      </div>
                      {
                        item.name
                      }
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <FeaturedList />
      </div>
    </div>
  )
}

export default Featured
