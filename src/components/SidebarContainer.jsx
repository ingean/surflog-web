// src/components/SidebarContainer.jsx
import { useQuery } from '@tanstack/react-query';
import { fetchSpotsHierarchy } from '../utils/apiHelpers';
import Navigation from './Navigation';
import ResponsiveNavigation from './ResponsiveNavigation';
import CircularProgress from '@mui/material/CircularProgress';

function SidebarContainer() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['spotHierarchy'], // Unique key for caching
    queryFn: fetchSpotsHierarchy,
  });

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Error loading spots: {error.message}</div>;

  return <ResponsiveNavigation data={data} />;
}

export default SidebarContainer