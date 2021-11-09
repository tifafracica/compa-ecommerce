import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from './cartWidget/cartWidget';
import LeftMenu from './leftMenu/leftMenu';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    },
}));

const Navbar = () => {
    
  const [openLeftMenu, changeOpenLeftMenu] = React.useState(false);

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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Compa Pedidos
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Login</Button>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>  
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