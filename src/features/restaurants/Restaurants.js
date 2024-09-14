import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from './restaurantsSlice';


export function Restaurants() {
  const restaurants = useSelector(selectRestaurants);

  return (
    <div>
      <h1>Restaurants</h1>
        
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.location}</p>
            <p>{restaurant.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}