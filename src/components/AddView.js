import React from 'react';
import { Link } from 'react-router-dom';

export function AddView() {
  return (
    <section style={{ marginTop: '22px' }}>
      <div className="container">
        <div className="card">
          <div
            className="card-body"
            style={{ background: 'var(--bs-form-valid-border-color)' }}
          >
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="text-center">
                    <img src="greg.png" width="121" height="181" alt="Greg" />
                    <div>
                      <img
                        src="gregsname.png"
                        width="176"
                        height="40"
                        alt="Greg's Name"
                      />
                    </div>
                    <div className="text-center">
                      <img
                        src="lunch0matic.png"
                        width="413"
                        height="38"
                        alt="Lunch-o-matic"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="card"
                style={{ marginTop: '10px', marginBottom: '10px' }}
              >
                <div className="card-body">
                  <div
                    className="text-center"
                    style={{ marginTop: '15px', marginBottom: '15px' }}
                  >
                    <Link className="btn btn-success" to="/addrestaurant">
                      Add Restaurant
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="card"
                style={{ marginTop: '10px', marginBottom: '10px' }}
              >
                <div className="card-body">
                  <div className="text-center">
                    <Link className="btn btn-success" to="/restaurants">
                      View Restaurants
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
