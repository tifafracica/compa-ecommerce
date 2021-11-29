import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    
    // these useEffects make an update when the props initial changes
    useEffect(() => {
        setCount(initial);
    }, [initial]);

    const noStock = () => {
      return stock === count || stock === 0;
    };
    
    const increment = () => {
      setCount((prev) => prev + 1);
    };
    
    const decrement = () => {
      setCount((prev) => prev - 1);
    };

    return(
        <Box sx={{width: 300}}>
            <Box
                sx={{
                    width: 300,
                    backgroundColor: '#ECE9E8',
                    borderRadius: 1,
                    p: 1 
                }}
            >
                <Box 
                sx={{
                    height: 50,
                    backgroundColor: '#ffffff',
                    borderRadius: 1,
                    mx: "auto",
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
                >
                    <Button variant="text"
                    sx={{
                        fontSize: 30 
                    }}
                    onClick={decrement}
                    disabled={count === 1 || stock === 0}
                    >
                        -
                    </Button>
                    <p>{ count }</p>
                    <Button variant="text"
                    sx={{
                        fontSize: 20 
                    }}
                    onClick={increment}
                    disabled={noStock()}
                    >
                        +
                    </Button>
                </Box>

            </Box>
            <Button variant="outlined"
            sx={{
                width: 315,
                mt: 2
            }}
            disabled={stock === 0}
            onClick={onAdd(count)}
            >
                {stock === 0 ? 'No hay Stock' : 'Agregar al carrito'}
            </Button>
        </Box>
    )
}

export default ItemCount;
