// src/App.jsx
import React from 'react';
import { SelectionProvider } from './context/SelectionProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import { CssBaseline } from '@mui/material';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SelectionProvider>
        <CssBaseline />
        <Layout />
      </SelectionProvider>  
    </QueryClientProvider>
  );
}

export default App;
