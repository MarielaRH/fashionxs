import { ShoppingCart } from "@mui/icons-material";
import MenuButton from "./MenuButton";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/cartContext";
import { Product } from "../utils/interfaces/products";

const Header = () => {
  const { user } = useUser();
  const { cart } = useContext(CartContext);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    calcTotalCart(cart);
  }, [cart]);

  const calcTotalCart = (cartList: Product[]) => {
    const priceList: number[] = [];
    cart.map((product: Product) => {
      priceList.push(product.price);
    });

    const total = priceList.reduce(
      (acumulator, currentValue) => acumulator + currentValue,
      0
    );
    setTotalCart(+total.toFixed(2));
  };

  return (
    <header className="h-[70px] bg-black w-full text-white flex justify-between items-center p-5 fixed z-50">
      <section id="logo">
        <Link href={"/"}>FASHIONXS</Link>
      </section>

      <section id="options" className="hidden md:flex gap-6">
        <Link href={"/#landing"}>Home</Link>
        <Link href={"/about"}>About us</Link>
        <Link href={"/#categories"}>Categories</Link>
      </section>

      <section id="user_options" className="hidden md:flex items-center gap-6">
        {user && (
          <Link href={"/cart"}>
            <span className="flex py-1 px-4 gap-2 bg-slate-800 rounded-full">
              <ShoppingCart />
              <span>$ {totalCart}</span>
            </span>
          </Link>
        )}

        {!user ? <Link href={"/api/auth/login"}>Login</Link> : <MenuButton />}
      </section>
      <section id="menu_options" className="flex md:hidden">
        <MenuButton />
      </section>
    </header>
  );
};

export default Header;
