import './Home.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate();
  const HandleClick = ()=>{
    navigate('/countries')
  }

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" className='home'>
      <Button onClick={HandleClick}>CONTINENTS</Button>
      <Button>CHART OF THE CONTINENTS</Button>
    </ButtonGroup>
  );
}
