import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Restaurants } from './features/restaurants/Restaurants';
import { RestaurantForm } from './features/restaurants/RestaurantForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RestaurantForm />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <Link to="/" className="btn btn-primary">
                Add Restaurant
              </Link>
              <Link to="/restaurants" className="btn btn-primary">
                Manage Restaurants
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;