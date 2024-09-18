import React from 'react';
import { Restaurants } from './features/restaurants/Restaurants';
import './App.css';

function App() {
  return (
    <div className="App">
      <Restaurants />
      <div class="container">
        <div class="card">
          <div class="card-body">
            <button class="btn btn-primary" type="button">
              Add Restaurant
            </button>
            <button class="btn btn-primary" type="button">
              Manage Restaurants
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
