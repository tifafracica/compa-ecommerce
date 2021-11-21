import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    const [item, setItem] = useState('Docena de tequeños')
    
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
        <React.Fragment>
            <Box
                sx={{
                    width: 300,
                    height: 110,
                    backgroundColor: '#ECE9E8',
                    borderRadius: 1,
                    mx: "auto"
                }}
            >
                <p className="item-text-counter">{item} Stock = {stock}</p>
                <Box 
                sx={{
                    width: 250,
                    height: 50,
                    backgroundColor: '#ffffff',
                    borderRadius: 1,
                    mx: "auto",
                    mb: 3,
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
                    <p>{count}</p>
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
                width: 300,
                mt: 2
            }}
            disabled={stock === 0}
            onClick={onAdd(count, item)}
            >
                {stock === 0 ? 'No hay Stock' : 'Agregar al carrito'}
            </Button>
        </React.Fragment>
    )
}

export default ItemCount;
