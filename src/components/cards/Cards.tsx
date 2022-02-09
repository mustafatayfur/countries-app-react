
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Country } from '../../types';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import Detail from '../detail/Detail';
import SameLanguages from '../../pages/sameLanguages/SameLanguages';


 const Cards =({item}:{item:any})=> {
    const navigate = useNavigate()
      console.log(item)
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       
        <CardMedia
          component="img"
          height="140"
          image={item.emojiU}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.capital? item.capital : 'Capital is not defined'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/samelanguages')}>
        
          Detail
        </Button>
      </CardActions>
      
      <SameLanguages languages={item.languages}/>
      
    </Card>
  );
}
export default Cards
