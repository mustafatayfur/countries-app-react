import './Home.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Home() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" className='home'>
      <Button>CONTINENTS</Button>
      <Button>CHART OF THE CONTINENTS</Button>
    </ButtonGroup>
  );
}
