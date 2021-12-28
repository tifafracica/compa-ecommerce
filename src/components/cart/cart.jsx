import { useCart } from "../../contexts/cartContext";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import cartStyles from './cart.module.css'
import { addOrder } from "../services/apiCall";

const theme = createTheme({
  typography: {
    price: {
        fontSize: 20,
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
  const totalPrice = cart.reduce((total, item)=>total+(item.item.price * item.quantity),0);

  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    const order = {
      buyer: data,
      items: cart,
      total: totalPrice
    };
    addOrder(order);
    navigate("/");
    clear();
  };

  const getCartItems = cart.map((element) => {
    return <List sx={{ bgcolor: 'background.paper' }} key={element.item.id}>
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
              <Card sx={{padding: 5}}>
                {getCartItems}
                <Box sx={{mt: 8}}>
                  <Typography variant='price'>
                    Total a pagar: ${totalPrice}
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={5} >
              <Card sx={{padding: 5}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box sx={{marginBottom: 3}}>
                    <Controller name="name" control={control} defaultValue="" 
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        className={`${cartStyles.width}`}
                        label="Nombre y Apellido"
                        variant="filled"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />)}
                      rules={{ required: 'Por favor llenar el campo' }}
                    />
                  </Box>

                  <Box sx={{marginBottom: 3}}>
                    <Controller name="email" control={control} defaultValue="" 
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        className={`${cartStyles.width}`}
                        label="Email"
                        variant="filled"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="email"
                      />)}
                      rules={{ required: 'Por favor llenar el campo' }}
                    />
                  </Box>

                  <Box sx={{marginBottom: 3}}>
                    <Controller name="phone" control={control} defaultValue="" 
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        className={`${cartStyles.width}`}
                        label="Telefono"
                        variant="filled"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="number"
                      />)}
                      rules={{ required: 'Por favor llenar el campo' }}
                    />   
                  </Box>

                  <Box sx={{display: 'flex;'}}>
                    <Button variant="contained" sx={{ width: 200, marginRight: 5}} 
                      onClick={() => {
                        clear()
                      }}>
                        Limpiar carrito
                    </Button>
                    <Button type="submit"variant="contained" sx={{ width: 200}}>Terminar Compra</Button>
                  </Box>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    }
    </>
    
  );
}