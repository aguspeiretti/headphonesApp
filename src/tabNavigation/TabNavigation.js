import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import {
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  Octicons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Discount from "../screens/Discount";
import WishList from "../screens/WishList";
import UserUi from "../screens/UserUi";
import { colors } from "../global/Colors";
import ProductNavigation from "./ProductNavigation";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="Home"
          component={ProductNavigation}
          options={{
            tabBarIcon: ({ focused }) => (
              <Octicons name="home" size={28} color={colors.secondary} />
            ),
          }}
        />
        <Tab.Screen
          name="Discount"
          component={Discount}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="dots-hexagon"
                size={28}
                color="black"
              />
            ),
          }}
        />
        <Tab.Screen
          name="WhishList"
          component={WishList}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name="heart" size={28} color={colors.secondary} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserUi}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather name="user" size={28} color={colors.secondary} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    shadowColor: "#ccc",
    elevation: 0,
    height: 80,
  },
});
