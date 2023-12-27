import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TabNavigation from "./src/tabNavigation/TabNavigation";
import { colors } from "./src/global/Colors";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <TabNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: colors.white,
  },
});
