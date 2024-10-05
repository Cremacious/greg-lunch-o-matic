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
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="comment">
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <button type="submit">
                    Submit
                  </button>
                </form>
  );
}
