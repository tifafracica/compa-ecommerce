import { useCart } from "../../contexts/cartContext";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CartStyles from './cart.module.css';
import { Link } from "react-router-dom";

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

export default function Cart() {
  const { cart, removeItem, clear } = useCart();
  
  const getCartItems = cart.map((element) => {
    return <List sx={{ width: '100%', bgcolor: 'background.paper' }} key={element.item.id}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={element.item.productName} src={element.item.pictureUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={element.item.productName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                precio unitario: ${element.item.price}
              </Typography>
              / Cantidad: {element.quantity} Unidad/des
            </React.Fragment>
          }
        />
        <Button variant="contained" sx={{ width: 200}} 
            onClick={() => {
              removeItem(element.item.id)
            }}>
              Remover Item
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  })

  return (
    <>
    { cart.length === 0 ?
      <Box sx={{ minWidth: "100%",
       minHeight: "100vh",
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       justifyContent: "center"
     }}>
       <Typography sx={{marginBottom: 4}}>
          No hay Items
       </Typography>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{ width: 315}}>
            Volver al Home
          </Button>
        </Link>
      </Box> 
      :
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, padding: 10 }} >
          <Grid container spacing={2}>
            <Grid item xs={7}>
              {getCartItems}
            </Grid>
            <Grid item xs={5} className={`${CartStyles.totalPriceBox}`}>
              <Typography variant='price'>
                Total a pagar: ${cart.reduce((total, item)=>total+(item.item.price * item.quantity),0)}
              </Typography>
              <Button variant="contained" sx={{ width: 200}} 
                onClick={() => {
                  clear()
                }}>
                  Limpiar carrito
            </Button>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    }
    </>
    
  );
}