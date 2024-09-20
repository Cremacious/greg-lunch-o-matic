import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from './restaurantsSlice';
import { useParams } from 'react-router-dom';

export function Restaurant() {
  const restaurants = useSelector(selectRestaurants);
  const { restaurantName } = useParams();
  const restaurant = restaurants.find(
    (restaurant) => restaurant.name === restaurantName
  );

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div>
              <h4 className="text-center card-title">{restaurant.name}</h4>
              <h6 className="text-muted card-subtitle mb-2">
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