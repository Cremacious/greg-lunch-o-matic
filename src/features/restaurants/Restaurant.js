import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from './restaurantsSlice';
import { useParams } from 'react-router-dom';
import { CommentForm } from '../comments/CommentForm';
import Map from './Map';

export function Restaurant() {
  const restaurants = useSelector(selectRestaurants);
  const { restaurantName } = useParams();
  const restaurant = restaurants.find(
    (restaurant) => restaurant.name === restaurantName
  );

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <h1>{restaurant.location}</h1>
      <Map address={restaurant.location} />
      <h3>Comments</h3>
      <CommentForm restaurantId={restaurant.restaurantId} />
      {restaurant.comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}
