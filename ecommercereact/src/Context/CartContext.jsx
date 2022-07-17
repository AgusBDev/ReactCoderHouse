import React, { createContext, useState, useEffect } from 'react';


function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}
//crear contexto
export const cartContext = createContext();

export default function CartContext({ children }) {
  
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  //const [existe, setExiste] = useState(false);

  function addItem(product, quantity) {

    let inCart = cart.find(item => item.id === product.id);
    console.log(inCart);
    if (inCart) {
      console.log("Entra aca con: " + quantity)
      inCart.amount += quantity;    
      onUpdate();
    }
    else {
      setCart([...cart, {...product, amount: quantity}]);  
    }
  }   
  

  function removeItem(itemId) {
    //eliminar un item del cart usando el id
    setCart([...cart].filter(producto => producto.id !== itemId));
  }

  function clear() {   
    setCart([]);
  }

  const isInCart = (item) => {
    //    // return i | -1;
    //    const aux = cart.find((elemento) => elemento.id === item.id);
    //    if (aux !== undefined){
    //     setExiste(true)
    //    } ;
    //    return existe;
  };

  function onUpdate() {
    localStorage.setItem("cart", JSON.stringify(cart));
    let totalProducts = cart.reduce((previous,current) =>  {return previous += current.amount}, 0); 
    let totalPrice = cart.reduce((previous,current) => {return previous += current.amount * current.Precio}, 0);
    setQuantity(totalProducts);
    setTotalPrice(totalPrice);
  }

  useEffect(() => {    
    onUpdate();
  }, [cart]); 


  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addItem,
          removeItem,
          clear,
          isInCart,
          quantity,
          totalPrice
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}
