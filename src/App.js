import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Restaurants } from './features/restaurants/Restaurants';
import { RestaurantForm } from './features/restaurants/RestaurantForm';
import { Restaurant } from './features/restaurants/Restaurant';
import { AddView } from './components/AddView';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this import is present

function App() {
  return (
    <Router>
      <div className="App">

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<AddView />} />
            <Route path="/addrestaurant" element={<RestaurantForm />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route
              path="/restaurant/:restaurantName"
              element={<Restaurant />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
