// src/components/ForecastCard.jsx
//import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import WindDirIcon from '@mui/icons-material/North';
import WavesIcon from '@mui/icons-material/Waves';
import WindIcon from '@mui/icons-material/Air';
import WaveDirIcon from '@mui/icons-material/Navigation';
import { toDirection, round } from '../utils/formatters';

// Configuration for what parameters to look for and how to display them
const parameterConfig = {
  waveheight: { 
    unit: 'm', 
    precision: 1,
    icon: WavesIcon, 
    subtext: { paramKey: 'waveheightmax', unit: 'm', precision: 1},
    direction: { paramKey: 'wavedir', unit: '°', icon: WaveDirIcon},
    suffix: { paramKey: 'waveperiod', unit: 's'} 
  },
  swellheight: { 
    unit: 'm', 
    precision: 1, 
    icon: WavesIcon, 
    subtext: { paramKey: 'swellheightmax', unit: 'm', precision: 1},
    direction: { paramKey: 'swelldir', unit: '°', icon: WaveDirIcon},
    suffix: { paramKey: 'swellperiod', unit: 's'}
  },
  windspeed: { 
    unit: 'm/s',  
    icon: WindIcon, 
    subtext: { paramKey: 'windgustspeed', unit: 'm/s'},
    direction: { paramKey: 'winddir', unit: '°', icon: WindDirIcon},
    suffix: { paramKey: 'windspeed', unit: 's'}
  }
};

function ForecastCard({ location }) {
  if (!location) {
    return (
      <Card sx={{ m: 1, height: '100%' }}>
        <CardContent>
          <Typography>No data available for {location.name}.</Typography>
        </CardContent>
      </Card>
    );
  }
  
  const renderParameter = (param) => {
    const config = parameterConfig[param];
    const data = location.data[0];
    const paramValue = data[param];
   
    // Only render if the param exists in the data 
    if (!paramValue || config.hidden) return null;

    const formattedValue = `${round(paramValue, config?.precision)} ${config?.unit}`
    const subValue = (config?.subText && data[config?.subtext.paramKey]) ? data[config?.subtext.paramKey] : null;
    const formattedSubValue = (subValue) ? `${round(subValue, config?.subtext?.precision)} ${config?.subtext?.unit}` : null;

    const hasRotation = (config?.direction && data[config?.direction?.paramKey]) ? true : false;
    const IconComponent = (hasRotation) ? config?.direction?.icon : config?.icon;
    const iconRotation = (hasRotation) ? toDirection(data[config?.direction?.paramKey]) : 0;

    const suffFixValue = data[config?.suffix?.paramKey]
    const formattedSuffix = (suffFixValue) ? `${round(suffFixValue, config?.suffix?.precision)} ${config?.suffix?.unit}` : null;

    return (
      <ListItem disablePadding key={param}>
        <ListItemText
          primary={formattedValue}
          secondary={formattedSubValue}
        />
        <IconComponent sx={{ mr: 2, transform: `rotate(${iconRotation}deg)`}} />
        <ListItemText
          primary={formattedSuffix}
        />
      </ListItem>
    );
  };

  return (
    <Card sx={{ m: 1, height: '100%' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {location.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location.data[0].utctime || '...'}
        </Typography>
        <List dense>
          {/* Dynamically generate list items based on the configuration and available data */}
          {Object.keys(parameterConfig).map(renderParameter)}
        </List>
      </CardContent>
    </Card>
  );
}

export default ForecastCard;
