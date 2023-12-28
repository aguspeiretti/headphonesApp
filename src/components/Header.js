import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../global/Colors";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("User");
        }}
        style={styles.sizer1}
      >
        <MaterialCommunityIcons name="dots-grid" size={35} color="black" />
      </TouchableOpacity>
      <View style={styles.sizer2}>
        <Ionicons name="ios-infinite-sharp" size={45} color="black" />
      </View>
      <View style={styles.userContainer}>
        <MaterialCommunityIcons
          name="line-scan"
          size={30}
          color="black"
          style={{ marginRight: 15 }}
        />
        <Feather name="shopping-bag" size={30} color="black" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: colors.calidwhite,
  },
  userContainer: {
    width: "33.33%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  sizer1: {
    width: "33.33%",
    alignItems: "flex-start",
  },
  sizer2: {
    width: "33.33%",
    alignItems: "center",
  },
});
