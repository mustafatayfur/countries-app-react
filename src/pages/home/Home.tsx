import './Home.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate();
  const HandleCountriesClick = ()=>{
    navigate('/countries')
  }
  const HandleChartClick = ()=>{
    navigate('/chart')
  }

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" className='home'>
      <Button onClick={HandleCountriesClick}>CONTINENTS</Button>
      <Button onClick={HandleChartClick}>CHART OF THE CONTINENTS</Button>
    </ButtonGroup>
  );
}
