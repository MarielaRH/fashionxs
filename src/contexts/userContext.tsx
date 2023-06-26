import { useUser } from "@auth0/nextjs-auth0/client";
import { createContext, useState } from "react";

export const userContext = createContext(false);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { error, isLoading, user } = useUser();
  const [isLogged, setIsLogged] = useState(false);

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  user ? setIsLogged(true) : setIsLogged(false);
};
