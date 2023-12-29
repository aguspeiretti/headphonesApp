import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useContext, useState } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../global/Colors";
import { globalContext } from "../context/GlobalContext";

const Search = ({ onSearch }) => {
  const useGlobalContext = useContext(globalContext);
  const { handleSearch } = useGlobalContext;

  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(text) => handleSearch(text)}
          placeholder="Search here..."
        ></TextInput>
        <View style={styles.logoContainer}>
          <AntDesign
            name="search1"
            size={30}
            color="black"
            style={{ marginRight: 15 }}
          />
          <MaterialCommunityIcons
            name="microphone-outline"
            size={30}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.calidwhite,
    height: 70,
    borderRadius: 10,
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  TextInput: {
    width: "80%",
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: "#6c757d",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    elevation: 7,
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  logoContainer: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageLogo: {
    width: "100%",
    height: "100%",
  },

  inputContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  logoContainer: {
    flexDirection: "row",
  },
});
