import React, {useState} from 'react';
import { addRestaurant } from './restaurantsSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export function RestaurantForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [comments, setComments] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted!');
    dispatch(addRestaurant(
        {
            id: uuidv4(),
        }
    ));
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="location">Location</label>
      <input type="text" id="location" name="location" />
      <label htmlFor="comments">Comments</label>
      <input type="text" id="comments" name="comments" />
      <button type="submit">Add Restaurant</button>
    </form>
  );
}
