import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
      <ToastContainer />
    </MainLayout>
  );
}
