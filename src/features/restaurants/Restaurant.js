import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from './restaurantsSlice';
import { useParams } from 'react-router-dom';

export function Restaurant() {
  const restaurants = useSelector(selectRestaurants);
  const { restaurantId } = useParams();
  const restaurant = restaurants.find(
    (restaurant) => restaurant.restaurantId === restaurantId
  );

  return (
    <div>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <div>
              <h4 class="text-center card-title">{restaurant.name}</h4>
              <h6 class="text-muted card-subtitle mb-2">
                {restaurant.location}
              </h6>
              <h3>Comments</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
