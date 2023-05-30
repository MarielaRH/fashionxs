import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import MenuButton from "./MenuButton";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[70px] bg-black w-full text-white flex justify-between items-center p-5 absolute">
      <section id="logo">
        <Link href={"/"}>FASHIONXS</Link>
      </section>

      <section id="options" className="hidden md:flex gap-6">
        <Link href={"/#landing"}>Home</Link>
        <Link href={"/about"}>About us</Link>
        <Link href={"/#categories"}>Categories</Link>
        <Link href={"/#trending"}>Trending</Link>
      </section>

      <section id="user_options" className="hidden md:flex items-center gap-6">
        <span className="flex py-1 px-4 gap-2 bg-slate-800 rounded-full">
          <ShoppingCart />
          <span>$ 0</span>
        </span>
        <AccountCircle fontSize="large" />
      </section>
      <section id="menu_options" className="flex md:hidden">
        <MenuButton />
      </section>
    </header>
  );
};

export default Header;
