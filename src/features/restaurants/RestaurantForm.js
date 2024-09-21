import React, { useState } from 'react';
import { addRestaurant } from './restaurantsSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export function RestaurantForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted!');
    dispatch(
      addRestaurant({
        restaurantId: uuidv4(),
        name,
        location,
        comment,
      })
    );
    setName('');
    setLocation('');
    setComment([]);
  }

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
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label">
                      Comment
                    </label>
                    <textarea
                      className="form-control"
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <form onSubmit={handleSubmit}>
//   <div className="mb-3">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input
//       type="text"
//       className="form-control"
//       id="name"
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//     />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="location" className="form-label">Location</label>
//     <input
//       type="text"
//       className="form-control"
//       id="location"
//       value={location}
//       onChange={(e) => setLocation(e.target.value)}
//     />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="comment" className="form-label">Comment</label>
//     <textarea
//       className="form-control"
//       id="comment"
//       value={comment}
//       onChange={(e) => setComment(e.target.value)}
//     ></textarea>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
