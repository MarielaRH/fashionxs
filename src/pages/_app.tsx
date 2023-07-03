import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { CartContextProvider } from "../context/cartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <CartContextProvider>
        <MainLayout>
          <Component {...pageProps} />
          <ToastContainer />
        </MainLayout>
      </CartContextProvider>
    </UserProvider>
  );
}
