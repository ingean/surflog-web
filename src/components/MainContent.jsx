// src/components/MainContent.jsx
import React from 'react';
import { Box, Typography, Breadcrumbs, Link, Toolbar } from '@mui/material';
import { useSelection } from '../hooks/useSelection';
import SpotContent from './SpotContent';
import ReportsContent from './reports/ReportsContent';

const drawerWidth = 240;

const MainContent = () => {
  const { drawerOpen, selection } = useSelection();
  
  if (!selection.spot) {
    return <Typography sx={{ p: 3 }}>Select a spot from the menu to see the forecast.</Typography>;
  }

  return (
    <Box 
      component="main" 
      sx={{ 
        flexGrow: 1, 
        p: 3, 
        transition: (theme) => theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ml: { xs: 0, sm: drawerOpen ? 0 : `${drawerWidth}px` }
        
      }} 
    >
      <Toolbar />
      <Breadcrumbs sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit">{selection.country}</Link>
        <Link underline="hover" color="inherit">{selection.location}</Link>
        <Typography color="text.primary">{selection.spot.name}</Typography>
      </Breadcrumbs>

      <SpotContent />
      <ReportsContent />
    </Box>
  );
};

export default MainContent