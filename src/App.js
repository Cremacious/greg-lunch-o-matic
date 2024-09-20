import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Restaurants } from './features/restaurants/Restaurants';
import { RestaurantForm } from './features/restaurants/RestaurantForm';
import { Restaurant } from './features/restaurants/Restaurant';
import { AddView } from './components/AddView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Restaurant App
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/addrestaurant">
                  Add Restaurant
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants">
                  Manage Restaurants
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<AddView/>} />
            <Route path="/addrestaurant" element={<RestaurantForm />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
