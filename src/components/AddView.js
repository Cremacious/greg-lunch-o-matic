import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

export function AddView() {
  return (
<div className="container">
          <div className="card">
            <div className="card-body">
              <Link to="/addrestaurant" className="btn btn-primary" role="button">
                Add Restaurant
              </Link>
              <button className="btn btn-primary" type="button">
                Manage Restaurants
              </button>
            </div>
          </div>
        </div>
  );
} // This code defines a simple React component called AddView.
