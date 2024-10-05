import React from 'react';
import { Link } from 'react-router-dom';

export function AddView() {
  return (
    <div>
      <Link to="/addrestaurant">
        Add Restaurant
      </Link>

      <Link to="/restaurants">
        View Restaurants
      </Link>
    </div>
  );
}
