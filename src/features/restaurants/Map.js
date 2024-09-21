import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Map({ address }) {
  const [location, setLocation] = React.useState(center);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
  });

  React.useEffect(() => {
    if (isLoaded) {
      // Geocode the address to get the latitude and longitude
      const geocodeAddress = async () => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK') {
            setLocation({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            });
          } else {
            console.error('Geocode was not successful for the following reason: ' + status);
          }
        });
      };

      geocodeAddress();
    }
  }, [address, isLoaded]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={10}
    >
      <Marker position={location} />
    </GoogleMap>
  );
}

export default Map;