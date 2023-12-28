import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../screens/Home";
import ProductDetail from "../screens/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { tabBarVisible } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

const ProductNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ tabBarVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default ProductNavigation;

const styles = StyleSheet.create({});
