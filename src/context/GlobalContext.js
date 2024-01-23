import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useEffect, useRef, useState } from "react";
import app from "../firbase/config";
import { getDatabase, ref, onValue } from "firebase/database";

export const globalContext = createContext();

const GlobalContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [catSelected, setCatSelected] = useState("all");
  const [brandSelected, setBrandSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [rtData, setrtData] = useState([]);

  //traer productos de la base de datos

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "products");
    console.log("reciving");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      if (data) {
        setrtData(data);
        setProducts(data);
      }
    });
  }, []);

  //Filtrado de productos por categoria

  const handleCatSelected = (catSelected) => {
    setCatSelected(catSelected);
  };
  const productFiltredByDiscount = rtData.filter(
    (product) => product.discount == true
  );
  const productFiltredByExclusive = rtData.filter(
    (product) => product.exclusive == true
  );

  useEffect(() => {
    catSelected === "all"
      ? setProducts(rtData)
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
        const filteredByBrand = rtData.filter(
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
    setProducts(rtData);
    isMounted.current = false;
    setBrandSelected(null);
  };

  //filtrado de productos por barra de busqueda

  const handleSearch = (text) => {
    setSearch(text);
  };

  useEffect(() => {
    const filtredByBar = rtData.filter((product) =>
      product.title.includes(search)
    );
    setProducts(filtredByBar);
  }, [search]);

  //agregar productos al carrito

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <globalContext.Provider
      value={{
        handleCatSelected,
        products,
        catSelected,
        handleBrandSelect,
        clearFilter,
        handleSearch,
        rtData,
        addToCart,
        cartItems,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContext;
