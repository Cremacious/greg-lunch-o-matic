import React, { useState } from 'react';
import { addRestaurant } from './restaurantsSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export function RestaurantForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted!');
    dispatch(
      addRestaurant({
        restaurantId: uuidv4(),
        name,
        location,
        comment,
      })
    );
    setName('');
    setLocation('');
    setComment([]);
  }

  return (
    <form>
      <input
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      ></input>
      <input
        placeholder="Location"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        value={location}
      ></input>
      <input
        placeholder="Comments"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        value={comment}
      ></input>
      <button onClick={handleSubmit}>Add Restaurant</button>
    </form>
  );
}
