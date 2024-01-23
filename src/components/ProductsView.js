import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { colors } from "../global/Colors";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { globalContext } from "../context/GlobalContext";

const ProductsView = () => {
  const navigation = useNavigation();

  const useGlobalContext = useContext(globalContext);
  const { handleCatSelected, products, catSelected  } = useGlobalContext;

 

  return (
    <View style={styles.productsContainer}>
      <View style={styles.selectContainer}>
        <View style={styles.titleCont}>
          <Text
            onPress={() => handleCatSelected("all")}
            style={catSelected !== "all" ? styles.title : styles.titleSelected}
          >
            All Products
          </Text>
          {catSelected == "all" ? (
            <Octicons name="dot-fill" size={24} color={colors.primary} />
          ) : (
            <Octicons name="dot" size={24} color={colors.primary} />
          )}
        </View>
        <View style={styles.titleCont}>
          <Text
            onPress={() => handleCatSelected("discount")}
            style={
              catSelected !== "discount" ? styles.title : styles.titleSelected
            }
          >
            Discount
          </Text>
          {catSelected == "discount" ? (
            <Octicons name="dot-fill" size={24} color={colors.primary} />
          ) : (
            <Octicons name="dot" size={24} color={colors.primary} />
          )}
        </View>
        <View style={styles.titleCont}>
          <Text
            onPress={() => handleCatSelected("Exclusive")}
            style={
              catSelected !== "Exclusive" ? styles.title : styles.titleSelected
            }
          >
            Exclusive
          </Text>
          {catSelected == "Exclusive" ? (
            <Octicons name="dot-fill" size={24} color={colors.primary} />
          ) : (
            <Octicons name="dot" size={24} color={colors.primary} />
          )}
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 15,
          justifyContent: "space-between",
        }}
      >
        {products.map((product) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProductDetail", { productId: product.id });
              }}
              key={product.id}
              style={styles.productCard}
            >
              <View style={styles.cardProductImage}>
                <Image
                  source={{ uri: product.thumbnail }}
                  resizeMode="contain"
                  style={styles.productImage}
                />
              </View>
              <Text style={styles.titleProduct}>{product.title}</Text>
              <Text style={styles.price}>${product.price}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ProductsView;

const styles = StyleSheet.create({
  productsContainer: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  selectContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    color: colors.secondaryLighter,
    fontSize: 18,
  },
  cardProductImage: {
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  productCard: {
    width: "49%",
    height: 300,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#6c757d",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    elevation: 7,
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  titleProduct: {
    color: colors.secondaryLighter,
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 15,
  },
  price: {
    fontWeight: "bold",
    paddingTop: 10,
    fontSize: 18,
    color: colors.secondaryLight,
    paddingLeft: 15,
  },
  titleSelected: {
    fontWeight: "bold",
    color: colors.secondary,
    backgroundColor: "#fff",
    fontSize: 18,
  },

  titleCont: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    marginRight: 20,
  },
});
