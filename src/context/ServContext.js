import { createContext } from "react";
import { base_url } from "../firbase/database";

export const serviceContext = createContext();

const ServContext = ({ children }) => {
  const getUser = async () => {
    const response = await fetch(base_url + "usuarios.json");

    if (response.status === 200) {
      const usuarios = await response.json();
      return Object.values(usuarios);
    } else {
      console.log("Error al realizar el get");
    }
  };

  const postUser = async () => {
    data = [];
    const response = await fetch(base_url + "usuarios.json", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log("Post realizado con éxito");
    } else {
      console.log("Error al realizar el post");
    }
  };

  return (
    <serviceContext.Provider
      value={{
        getUser,
        postUser,
      }}
    >
      {children}
    </serviceContext.Provider>
  );
};

export default ServContext;
