import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectRestaurants } from './restaurantsSlice';
import { Link } from 'react-router-dom';
// import { SearchBar } from '../../components/Search/SearchBar';

export function Restaurants() {
  const restaurants = useSelector(selectRestaurants);
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <section style={{ marginTop: '22px' }}>
      <h1>Test</h1>
      <input type="search" onChange={onSearchChange} />
      <div className="container">
        <div className="card">
          <div
            className="card-body"
            style={{ background: 'var(--bs-form-valid-border-color)' }}
          >
            <div
              className="card"
              style={{ color: 'var(--bs-form-valid-color)' }}
            >
              <div
                className="card-body"
                style={{ color: 'var(--bs-form-valid-border-color)' }}
              >
                <div className="text-center">
                  <h1
                    style={{
                      fontFamily: "'Turret Road', serif",
                      color: 'var(--bs-emphasis-color)',
                    }}
                  >
                    Restaurants
                  </h1>
                </div>
                {restaurants
                  .filter((restaurant) =>
                    restaurant.name.toLowerCase().includes(searchTerm)
                  )
                  .map((filteredRestaurant) => (
                    <div
                      key={filteredRestaurant.id}
                      style={{ marginTop: '10px', marginBottom: '10px' }}
                    >
                      <div
                        className="card"
                        style={{ background: 'var(--bs-form-valid-color)' }}
                      >
                        <div className="card-body">
                          <div
                            className="card"
                            style={{ marginBottom: '10px' }}
                          >
                            <div
                              className="card-body"
                              style={{
                                marginTop: '-2px',
                                paddingTop: '10px',
                                paddingBottom: '0px',
                              }}
                            >
                              <div>
                                <h4
                                  className="text-center"
                                  style={{ fontFamily: "'Turret Road', serif" }}
                                >
                                  {filteredRestaurant.name}
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="text-center">
                                <div className="card">
                                  <div className="card-body">
                                    <h5
                                      style={{
                                        fontFamily: "'Turret Road', serif",
                                      }}
                                    >
                                      Location
                                    </h5>
                                    <p
                                      className="text-center"
                                      style={{
                                        fontFamily: "'Turret Road', serif",
                                      }}
                                    >
                                      {filteredRestaurant.location}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card">
                                <div className="card-body">
                                  <div className="text-center">
                                    <Link
                                      to={`/restaurant/${filteredRestaurant.name}`}
                                      className="btn btn-success"
                                    >
                                      Check It Out!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="text-center">
                                <div className="card">
                                  <div className="card-body">
                                    <h5
                                      style={{
                                        fontFamily: "'Turret Road', serif",
                                      }}
                                    >
                                      Greg Says:
                                    </h5>
                                    <p
                                      className="text-center"
                                      style={{
                                        fontFamily: "'Turret Road', serif",
                                      }}
                                    >
                                      {
                                        filteredRestaurant.comments[
                                          filteredRestaurant.comments.length - 1
                                        ].comment
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
