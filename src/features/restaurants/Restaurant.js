import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from './restaurantsSlice';


export function Restaurant() {
  const restaurants = useSelector(selectRestaurants);

  return (
    <div>
      {restaurants.map((restaurant) => {
        return (
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.location}</p>
            {/* <Comments restaurantId={restaurant.restaurantId} /> */}
          </li>
        );
      })}
    </div>
  );
}
