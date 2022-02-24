import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (cantidad, item) => {
    if (onCart(item.id)) {
      alert("producto existente en carrito");
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };
  // console.log(cart);

  const onCart = (id) => cart.some((item) => item.id === id);

  const clearItem = (itemID) => {
    const filterItem = cart.filter((item) => item.id !== itemID);
    setCart(filterItem);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartContextProvider;
