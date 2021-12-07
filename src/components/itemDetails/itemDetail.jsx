import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ItemCount from '../itemCount.js/itemCount';
import Button from '@mui/material/Button';
import DetailStyles from './itemDetail.module.css';
import { useCart } from '../../contexts/cartContext';


const theme = createTheme({
  typography: {
    price: {
        fontSize: 40,
        fontWeight: 800,
        color: '#e53935'
    },
    title: {
      fontSize: 45,
      fontWeight: 800
    }
  },
});

const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  const [addButton, setAddButton] = useState(false);
  const [addCount, setAddCount] = useState();
 
  const onAdd = (count) => () => {
    setAddButton(true);
    setAddCount(count);
  };

  return (  
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1, padding: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <img src={item.pictureUrl} alt={item.productName} style={{ width: '100%' }}/>
        </Grid>
        <Grid item xs={5}>
          <Typography color="text.secondary">{item.category}</Typography>
          <Typography variant='title' color="text.primary">{item.productName}</Typography>
          <Typography sx={{ marginTop: 3 }} >{item.description}</Typography>
          <Typography variant='price'>${item.price}</Typography>
          <p>Stock Disponible: {item.stock}</p>
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          <Link to="/cart" 	sx={{ display: 'none' }} style={{ textDecoration: 'none' }}>
            <p className={ addButton ? `${DetailStyles.showbutton}` : `${DetailStyles.nobutton}`}> Vas a comprar { addCount } { item.productName } </p>
            <Button variant="contained" sx={{ width: 315}} 
            className={ addButton ? `${DetailStyles.showbutton}` : `${DetailStyles.nobutton}`} 
            onClick={() => {
              addItem(item, addCount)
            }}>
              Comprar
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  );
};
      
export default ItemDetail;
