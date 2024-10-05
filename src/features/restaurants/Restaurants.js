import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectRestaurants } from './restaurantsSlice';
import { Link } from 'react-router-dom';
// import { SearchBar } from '../../components/Search/SearchBar';

export function Restaurants() {
  const restaurants = useSelector(selectRestaurants);
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div>
      <input type="search" onChange={onSearchChange} />
      {restaurants
        .filter((restaurant) =>
          restaurant.name.toLowerCase().includes(searchTerm)
        )
        .map((filteredRestaurant) => (
          <div key={filteredRestaurant.id}>
            <h1>{filteredRestaurant.name}</h1>
            <Link
              to={`/restaurant/${filteredRestaurant.name}`}
              className="btn btn-success"
            >
              Check it out
            </Link>
          </div>
        ))}
    </div>
  );
}
