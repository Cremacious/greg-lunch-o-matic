import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from './restaurantsSlice';

export function Restaurant() {
  const restaurants = useSelector(selectRestaurants);


  
  return (
    <div>
      <div class="container">
        <div class="card">
          <div class="card-body">
            
            <p>PICTURE</p>
            <h4 class="text-center card-title">Title</h4>
            <h6 class="text-muted card-subtitle mb-2">LOCATION</h6>
            <p class="text-center card-text">COMMENT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
