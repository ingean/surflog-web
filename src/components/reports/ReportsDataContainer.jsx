// src/components/reports/ReportsDataContainer.jsx
import { useQuery } from '@tanstack/react-query';
import { fetchReports } from '../../utils/apiHelpers';
import ReportsDataGrid from './ReportsDataGrid';
import CircularProgress from '@mui/material/CircularProgress';

export default function ReportsDataContainer() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['allReports'], // Unique key for caching
    queryFn: fetchReports,
  });

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Error loading reports: {error.message}</div>;

  return <ReportsDataGrid rows={data} />;
}
