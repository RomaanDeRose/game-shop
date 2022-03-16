import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storageProducts = localStorage.getItem("cartProducts");
    return storageProducts ? JSON.parse(storageProducts) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("cartProducts", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (cantidad, item) => {
    if (onCart(item.id)) {
      const updateCart = [...cart];
      updateCart.forEach((itemCart) => {
        if (itemCart.id === item.id) {
          itemCart.cantidad += cantidad;
        }
      });
      setCart(updateCart);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const onCart = (id) => cart.some((item) => item.id === id);

  const clearItem = (itemID) => {
    const filterItem = cart.filter((item) => item.id !== itemID);
    setCart(filterItem);
  };

  const clearCart = () => setCart([]);

  const showItems = () => {
    let itemCartCantidad = 0;
    cart.forEach((itemCart) => {
      itemCartCantidad += itemCart.cantidad;
    });
    return itemCartCantidad;
  };

  const showTotal = () => {
    const totalPrice = cart.reduce(
      (acc, item) => (acc += item.cantidad * item.price),
      0
    );
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearItem, clearCart, showItems, showTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartContextProvider;
