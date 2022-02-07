
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Continent } from '../../types';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';


 const Cards: FunctionComponent<Continent> =({country}:any)=> {
    const navigate = useNavigate()
console.log(country)


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>7
        <CardMedia
          component="img"
          height="140"
          image={country.emojiU}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {country.capital? country.capital : 'Capital is not defined'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/samelanguages')}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
export default Cards
