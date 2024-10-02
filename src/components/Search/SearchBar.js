import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from '../../features/restaurants/restaurantsSlice';
import { useState } from 'react';


export function SearchBar () {

    const restaurants = useSelector(selectRestaurants);

    const [searchTerm, setSearchTerm] = useState('');

    const onSearchChange = (e) => {
        setSearchTerm(e);
    }

    return (
        <div>
            <input onChange={onSearchChange} type="text" placeholder="Search..." />

        {restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchTerm)).map(filteredRestaurant => (
            <div key={filteredRestaurant.id}><h1>{filteredRestaurant.name}</h1></div>
        ))}

        </div>
    )
}

