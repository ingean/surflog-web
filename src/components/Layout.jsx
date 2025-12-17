import React from 'react';

import { Box, Toolbar } from '@mui/material';

import ResponsiveAppBar from './ResponsiveAppBar';
import SidebarContainer from  './SidebarContainer'
import MainContent from  './MainContent'

function Layout() {
  
  return (
    <Box sx={{ display: 'flex' }}>
      
      <ResponsiveAppBar />
      <SidebarContainer />
    
      <Toolbar /> 
      <MainContent />  
    </Box>
    
  );
}

export default Layout;