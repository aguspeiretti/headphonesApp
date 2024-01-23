import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TabNavigation from "./src/tabNavigation/TabNavigation";
import { colors } from "./src/global/Colors";
import ProductDetail from "./src/screens/ProductDetail";
import UserUi from "./src/screens/UserUi";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GlobalContext from "./src/context/GlobalContext";
import Cart from "./src/screens/Cart";
import SingUp from "./src/screens/SingUp";
import Login from "./src/screens/Login";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GlobalContext>
      <SafeAreaView style={styles.safe}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Principal" component={TabNavigation} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="User" component={UserUi} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="SignUp" component={SingUp} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GlobalContext>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: colors.white,
  },
});
