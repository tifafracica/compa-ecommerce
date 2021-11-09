import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
    return ( 
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="you have 6 items"
            sx={{ ml: 2 }}
        >
            <Badge badgeContent={6} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
}

export default CartWidget;