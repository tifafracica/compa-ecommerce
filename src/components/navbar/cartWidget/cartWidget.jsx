import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { useCart } from "../../../contexts/cartContext";

const CartWidget = () => {
    const { cart } = useCart();

    return ( 
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="you have 6 items"
            sx={{ ml: 2 }}
        >
            <Badge badgeContent={cart.reduce((accum, item)=> accum + item.quantity, 0)} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
}

export default CartWidget;