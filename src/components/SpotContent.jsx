// src/components/MainContent.jsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useSelection } from '../hooks/useSelection';

import ForecastContainer from './ForecastContainer';


const dataSources = [
    { url: "https://high-plating-184911.appspot.com/forecasts/yr/1-2275034", source: "Yr coast", type: "forecast" }, 
    { url: "https://high-plating-184911.appspot.com/forecasts/smhi", source: "Yr coast", type: "forecast" },
    { url: "https://high-plating-184911.appspot.com/forecasts/dmi_api/wam_dw", source: "Yr coast", type: "forecast" },
    { url: "https://high-plating-184911.appspot.com//observations/frost", source: "Yr coast", type: "observations" },
  ];

const SpotContent = () => {
  const { selection } = useSelection();
  return (
    <Box sx={{ padding: '20px' }}>
      <h1>{selection.spot.name}</h1>
      <p>Latest forecast and observations.</p>
      <Grid container spacing={3}> 
        {dataSources.map((forecast, index) => (
          <Grid 
            item 
            xs={12}    // Take up all 12 columns on extra-small screens (phones)
            sm={6}     // Take up 6 columns on small screens (tablets) -> 2 cards per row
            md={4}     // Take up 4 columns on medium screens (laptops) -> 3 cards per row
            key={index}
          >
            <ForecastContainer datasource={forecast} />
          </Grid>
        ))}
      </Grid>
    </Box>
    
  );
};

export default SpotContent