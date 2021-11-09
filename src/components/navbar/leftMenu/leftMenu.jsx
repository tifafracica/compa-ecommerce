import { Divider, IconButton, List, ListItem, ListItemText, SwipeableDrawer } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";

const iOS =
typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

function LeftMenu({open, onOpen, onClose}) {

    const theme = useTheme();

    const categoriesObj = [
        {
            id: 1,
            name: 'Tequeños'
        },
        {
            id: 2,
            name: 'Queso Venezolano'
        },
        {
            id: 3,
            name: 'Ron Venezolano'
        },
    ]
    const [categories, changeCategories] = useState(categoriesObj);

    return ( 
        <SwipeableDrawer
            color='primary'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                  background: '#e53935',
                  color: '#fff'
                },
              }}
            anchor="left"
            open={open}
            onOpen={onOpen}
            onClose={onClose}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
        >
            <DrawerHeader>
                <IconButton onClick={onClose} sx={{color: '#fff'}}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider sx={{borderColor: 'rgba(255,255,255,0.2)'}}/>
            <List>
                {categories.map(({id, name}) => (
                    <ListItem button key={id}>
                        <ListItemText primary={name} />
                    </ListItem>
                ))}
            </List>
        </SwipeableDrawer>
     );
}

export default LeftMenu;