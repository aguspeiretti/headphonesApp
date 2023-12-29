import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useEffect, useRef, useState } from "react";
import productos from "../data/productsData";

export const globalContext = createContext();

const GlobalContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [catSelected, setCatSelected] = useState("all");
  const [brandSelected, setBrandSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

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

  useEffect(() => {
    catSelected === "all"
      ? setProducts(productos)
      : catSelected === "discount"
      ? setProducts(productFiltredByDiscount)
      : setProducts(productFiltredByExclusive);
  }, [catSelected]);

  //filtrado de producto por marca useRef pàra ver si ya esta montado brandSelected

  const isMounted = useRef(false);

  const handleBrandSelect = (brandName) => {
    setBrandSelected(brandName);
  };

  useEffect(() => {
    if (isMounted.current) {
      if (catSelected === "discount" || catSelected === "Exclusive") {
        const filteredByBrand = products.filter(
          (product) => product.brand === brandSelected
        );
        setProducts(filteredByBrand);
      } else {
        const filteredByBrand = productos.filter(
          (product) => product.brand === brandSelected
        );
        setProducts(filteredByBrand);
      }
    } else {
      isMounted.current = true;
    }
  }, [brandSelected]);

  const clearFilter = () => {
    setCatSelected("all");
    setProducts(productos);
    isMounted.current = false;
    setBrandSelected(null);
  };

  //filtrado de productos por barra de busqueda

  const handleSearch = (text) => {
    setSearch(text);
  };

  useEffect(() => {
    const filtredByBar = productos.filter((product) =>
      product.title.includes(search)
    );
    setProducts(filtredByBar);
  }, [search]);

  return (
    <globalContext.Provider
      value={{
        handleCatSelected,
        products,
        catSelected,
        handleBrandSelect,
        clearFilter,
        handleSearch,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContext;
