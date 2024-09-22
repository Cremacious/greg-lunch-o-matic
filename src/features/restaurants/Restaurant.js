import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from './restaurantsSlice';
import { useParams } from 'react-router-dom';
import { CommentForm } from '../comments/CommentForm';
import Map from './Map';

export function Restaurant() {
  const restaurants = useSelector(selectRestaurants);
  const { restaurantName } = useParams();
  const restaurant = restaurants.find(
    (restaurant) => restaurant.name === restaurantName
  );

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <section style={{ marginTop: '22px' }}>
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
                    {restaurant.name}
                  </h1>
                </div>
                <div className="text-center">
                  <h2
                    style={{
                      fontFamily: "'Turret Road', serif",
                      fontSize: '15.52px',
                      color: 'var(--bs-emphasis-color)',
                    }}
                  >
                    {restaurant.location}
                  </h2>
                </div>
                <div className="d-flex justify-content-center">
                  <Map address={restaurant.location} />
                </div>

                <div className="text-center" style={{ marginTop: '10px' }}>
                  <h2
                    style={{
                      fontFamily: "'Turret Road', serif",
                      fontSize: '22.52px',
                      color: 'var(--bs-emphasis-color)',
                    }}
                  >
                    Greg&#39;s Comments
                  </h2>
                  <CommentForm restaurantId={restaurant.restaurantId} />
                  {restaurant.comments.map((comment) => (
                    <div
                      style={{ marginTop: '10px', marginBottom: '10px' }}
                      key={comment.id}
                    >
                      <div
                        className="card"
                        style={{ background: 'rgba(25,135,84,0.53)' }}
                      >
                        <div
                          className="card-body"
                          style={{ color: 'var(--bs-emphasis-color)' }}
                        >
                          <h6
                            className="text-start card-title"
                            style={{
                              fontFamily: "'Turret Road', serif",
                              fontWeight: 'bold',
                            }}
                          >
                            {comment.commentDate}
                          </h6>
                          <p
                            className="card-text"
                            style={{
                              fontFamily: "'Turret Road', serif",
                              textAlign: 'left',
                            }}
                          >
                            {comment.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <div>
//   <div className="container">
//     <div className="card">
//       <div className="card-body">
//         <div>
//           <h4 className="text-center card-title">{restaurant.name}</h4>
//           <h6 className="text-muted card-subtitle mb-2">
//             {restaurant.location}
//           </h6>
//           <Map address={restaurant.location} />
//           <h3>Comments</h3>
//           <CommentForm restaurantId={restaurant.restaurantId} />
//           <ul>
//             {restaurant.comments.map((comment) => (
//               <li>{comment.comment}</li>
//               // <li key={index}>{comment}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
