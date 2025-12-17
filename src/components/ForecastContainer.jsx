// src/components/ForecastContainer.jsx
import React, { useState, useEffect } from 'react';
import ForecastCard from './ForecastCard'; // Import the individual card
import Grid from '@mui/material/Grid'; // For the responsive layout
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function ForecastContainer({ datasource }) {
  const [source, setSource] = useState({});
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecasts = async () => {
      try {
        setLoading(true);
        const response = await fetch(datasource.url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Assuming the API returns an array of location objects:
        // e.g., [{ locationName: 'A', waveHeight: 1.2, ... }, { ... }]
        const data = await response.json();
        const forecastData = Array.isArray(data) ? data : [data];
        setLocations(forecastData);
        setSource(datasource);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForecasts();
  }, [datasource]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
        <Typography sx={{ ml: 2 }}>Loading all {source.type} locations from {source.source}...</Typography>
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Could not load data: {error}</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {locations.map((location) => (
        // For each location object in the array, create a Grid item
        <Grid
          item
          xs={12} sm={6} md={4}
          key={location.name || location.id} // Use a unique key from your data
        >
          {/* Pass the *already fetched data* to the card using a prop called 'data' */}
          <ForecastCard location={location} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ForecastContainer;
