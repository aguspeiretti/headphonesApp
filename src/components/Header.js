import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../global/Colors";
import { useNavigation } from "@react-navigation/native";
import { globalContext } from "../context/GlobalContext";
import React, { useContext } from "react";

const Header = () => {
  const useGlobalContext = useContext(globalContext);
  const { selectedImage } = useGlobalContext;

  const image = selectedImage;

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
        {image ? (
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={{ uri: image }}
              style={styles.profilePicture}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <FontAwesome
            onPress={() => navigation.navigate("Profile")}
            name="user-circle-o"
            size={30}
            color="black"
            style={{ marginRight: 15 }}
          />
        )}

        <MaterialCommunityIcons
          name="line-scan"
          size={30}
          color="black"
          style={{ marginRight: 15 }}
        />
        <Feather
          onPress={() => navigation.navigate("Cart")}
          name="shopping-bag"
          size={30}
          color="black"
        />
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
  profilePicture: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 15,
  },
});
