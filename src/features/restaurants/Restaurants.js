import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from './restaurantsSlice';
import { Link } from 'react-router-dom';

export function Restaurants() {
  const restaurants = useSelector(selectRestaurants);

  return (
    <div>
      <h1>Restaurants</h1>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              {restaurants.map((restaurant) => (
                <Link to={`/restaurant/${restaurant.restaurantId}`} className="btn btn-primary">{restaurant.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
