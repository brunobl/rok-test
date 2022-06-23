import { useState, useEffect } from 'react';

export const useGetLocation = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const successHandler = ({ coords, timestamp }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp
    });
  };

  const errorHandler = (error) => { setError(error.message); };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation might not be supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler
    );
  }, []);

  return { ...position, ...error };
};