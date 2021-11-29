import * as React from 'react';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import LinkStyles from '../../global.module.css'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({cardData}) => {
  return (  
    <Card sx={{ maxWidth: 345 }}>
    <Link to={`/item/${cardData.id}`} className={`${LinkStyles.noUnderline} ${LinkStyles.black}`}>
      <CardMedia
        component="img"
        alt={cardData.productName}
        height="140"
        image={cardData.pictureUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardData.productName}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color={"primary"} >
        ${cardData.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {cardData.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" sx={{ margin: 'auto'}}>Ver detalle del producto</Button>
      </CardActions>
    </Link>
  </Card>
    
  
  );
};
    
export default Item;