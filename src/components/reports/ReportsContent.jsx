// src/components/MainContent.jsx
import React from 'react';
import { Box } from '@mui/material';
import { useSelection } from '../../hooks/useSelection';
import ReportsDataContainer from './ReportsDataContainer'

export default function ReportsContent() {
  const { selection } = useSelection();
  return (
    <Box sx={{ padding: '20px' }}>
      <h1>Reports for {selection.spot.name}</h1>
      <ReportsDataContainer/>
    </Box>
    
  );
};
