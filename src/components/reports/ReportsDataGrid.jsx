import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ScoreChip from './ScoreChip';
import Chip from '@mui/material/Chip';

function formatScore(props) {
  const { value } = props;
  return <ScoreChip score={value} />
}

const columns = [
  { field: 'type', headerName: '', width: 90 },
  { field: 'spot', headerName: 'Spot', width: 150},
  { 
    field: 'surfHeight',
    headerName: 'Surf (m)',
    width: 250,
    sortable: false,
    valueGetter: (value, row) => `${row["waveheight_from"] || ''} - ${row["waveheight_to"]  || ''} m`,
  },
  {
    field: 'score',
    headerName: 'Score',
    width: 110,
    renderCell: formatScore,
  }
];

export default function ReportsDataGrid({ rows }) {

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
