import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import productos from "../data/productsData";

export const globalContext = createContext();

const GlobalContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [catSelected, setCatSelected] = useState("all");
  const [brandSelected, setBrandSelected] = useState("");

  //Filtrado de productos por categoria
  const handleCatSelected = (catSelected) => {
    setCatSelected(catSelected);
  };
  const productFiltredByDiscount = productos.filter(
    (product) => product.discount == true
  );
  const productFiltredByExclusive = productos.filter(
    (product) => product.exlusive == true
  );
  const filtredByBrand = productos.filter(
    (product) => product.brand === brandSelected
  );
  useEffect(() => {
    catSelected === "all"
      ? setProducts(productos)
      : catSelected === "discount"
      ? setProducts(productFiltredByDiscount)
      : catSelected === "Exclusive"
      ? setProducts(productFiltredByExclusive)
      : setProducts(filtredByBrand);
  }, [catSelected, brandSelected]);

  //filtrado de producto por marca

  const handleBrandSelect = (brandName) => {
    setBrandSelected(brandName);
  };

  return (
    <globalContext.Provider
      value={{ handleCatSelected, products, catSelected, handleBrandSelect }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContext;
