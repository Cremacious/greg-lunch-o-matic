import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export function AddView() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Link to="/addrestaurant" className="btn btn-primary" role="button">
            Add Restaurant
          </Link>
          <Link to="/restaurants" className="btn btn-primary" role="button">
            View Your Restaurants
          </Link>
        </div>
      </div>
    </div>
  );
}