
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { useNavigate } from 'react-router-dom';



 const Cards =({item}:{item:any})=> {
    const navigate = useNavigate()
      console.log(item)
    
  return (
    <Card sx={{ width: 300, margin:3 }}>
      <CardActionArea>
  
        <CardMedia
          component="img"
          height="140"
          image= {item.emojiU}
          alt="flag"
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
        <Button size="small" color="primary" onClick={() => navigate('/samelanguages', {state:{item}})}>
          Detail
        </Button>
      </CardActions>
       
    </Card>
  );
}
export default Cards
