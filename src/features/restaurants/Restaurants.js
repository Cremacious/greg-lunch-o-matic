import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from './restaurantsSlice';

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
                <a class="btn btn-primary" role="button" href="index.html">
                  {restaurant.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
