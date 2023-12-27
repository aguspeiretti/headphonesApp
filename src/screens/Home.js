import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Search from "../components/search";
import BrandScroll from "../components/BrandScroll";
import { colors } from "../global/Colors";
import ProductsView from "../components/ProductsView";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.homeContainer}>
        <Header />
        <Search />
        <BrandScroll />
        <ProductsView />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: colors.calidwhite,
  },
});
