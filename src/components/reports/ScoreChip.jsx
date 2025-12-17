import Chip from '@mui/material/Chip';

export default function ScoreChip(props) {
  const { score } = props;
  const configs = {
    0: {caption: 'Flatt', color: 'primary'},
    1: {caption: 'Despo', color: 'error'},
    2: {caption: 'Dårlig', color: 'warning'},
    3: {caption: 'Ok', color: 'info'}, 
    4: {caption: 'Bra', color: 'success'},
    5: {caption: 'Episk', color: 'secondary'},
  }
  const config = configs[score];
  return <Chip 
          label={config.caption} 
          color={config.color}
          sx={{ minWidth: 60 }}
          />
}