import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from '../../features/restaurants/restaurantsSlice';
import { useState } from 'react';


export function SearchBar () {

    const restaurants = useSelector(selectRestaurants);

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e);
    }

    return (
        <div>
            <input onChange={(e) => {handleChange(e.target.value)}} type="text" placeholder="Search..." />
            {restaurants.filter((restaurant) => restaurant.name.includes(searchTerm)).map((restaurant) => (
                <h1 key={restaurant.id}>{restaurant.name}</h1>
            ))}
        </div>
    )
}

