import { createContext, useContext, useState } from "react";
import swal from 'sweetalert';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const isInCart = (id) => {
    return cart.some((el) => el.item.id === id)
  }

  const addItem = (item, quantity) => {
    const itemObj = {
      item,
      quantity
    }
    if(isInCart(itemObj.item.id)) {
      const newArray = cart.map(obj => {
        if(obj.item.id === itemObj.item.id){
          return {...obj, quantity: obj.quantity += itemObj.quantity}
        }
        return obj
      })
      setCart(newArray)
    }else{
      setCart([...cart, itemObj]);
    }
  }

  const removeItem = (id) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.item.id !== id);
    setCart(hardCopy);
    swal({
      title: "Item Eliminado!",
      icon: "success",
      button: "Seguir comprando!",
    });
  }

  const clear = () =>{
    setCart([]);
  }
  
  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  )
};
