import { StyleSheet, Text, View } from "react-native";
import React from "react";
import productsData from "../data/productsData";

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  console.log(productId);

  const productSelected = productsData.find(
    (product) => product.id == productId
  );

  console.log(productSelected);

  return (
    <View>
      <Text>ProductDetail</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
