import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CartWidget from './cartWidget/cartWidget';
import LeftMenu from './leftMenu/leftMenu';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import NavbarStyles from '../../global.module.css';
import { useCart } from "../../contexts/cartContext";



const Navbar = () => {
  const [openLeftMenu, changeOpenLeftMenu] = React.useState(false);
  const { cart } = useCart();

  const handleSidebarOpen = () => {
    changeOpenLeftMenu(true);
  };

  const handleSidebarClose = () => {
    changeOpenLeftMenu(false);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static" color={"primary"} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/' className={`${NavbarStyles.noUnderlineNavbar}`}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Compa Pedidos
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={cart.length === 0 ? `${NavbarStyles.none}` : `${NavbarStyles.show}`}>  
            <CartWidget/>
          </Box>
        </Toolbar>
      </AppBar>
      <LeftMenu 
        open={openLeftMenu}
        onOpen={handleSidebarOpen}
        onClose={handleSidebarClose} 
      />
    </Box>
  );
}

export default Navbar;