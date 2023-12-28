import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TabNavigation from "./src/tabNavigation/TabNavigation";
import { colors } from "./src/global/Colors";
import ProductDetail from "./src/screens/ProductDetail";
import UserUi from "./src/screens/UserUi";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GlobalContext from "./src/context/GlobalContext";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GlobalContext>
      <SafeAreaView style={styles.safe}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={TabNavigation} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="User" component={UserUi} />
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
