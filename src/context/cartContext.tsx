import { Product } from "@/utils/interfaces/products";
import React, { createContext, useEffect, useState } from "react";
import { forEachChild } from "typescript";

const initialValue: Product[] = [];

export const CartContext = createContext({
  cart: initialValue,
  addToCart: (product: Product) => {},
});

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [firstLoadPage, setFirstLoadPage] = useState<boolean>(false);
  // Manages the cart
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // If the page is reload, verifies if there are products in the cart and get this products from localstorage
    // This will be execute once (when the page is loaded the first time)
    if (!firstLoadPage) {
      const cartStorage = localStorage.getItem("cart");
      if (cartStorage && cartStorage.length > 0 && cart.length === 0) {
        setCart(JSON.parse(cartStorage));
      }
      setFirstLoadPage(true);
    }
  }, [cart, firstLoadPage]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    // saves the cart in the localstorage
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
  };

  const context = {
    cart: cart,
    addToCart: addToCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
