import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../global/Colors";
import fondo from "../../assets/images/fondo.png";
import { Ionicons } from "@expo/vector-icons";
import { Octicons, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const UserUi = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  data = [
    {
      id: "1",
      text: "Home",
      icon: <Octicons name="home" size={30} color={colors.clear} />,
    },
    {
      id: "2",
      text: "Account",
      icon: <Feather name="user" size={30} color={colors.clear} />,
    },
    {
      id: "3",
      text: "Wallet",
      icon: <Ionicons name="wallet-outline" size={30} color={colors.clear} />,
    },
    {
      id: "4",
      text: "Night Mode",
      icon: <Ionicons name="moon-outline" size={30} color={colors.clear} />,
    },
    {
      id: "5",
      text: "Logout",
      icon: <SimpleLineIcons name="logout" size={30} color={colors.clear} />,
    },
  ];
  const ListItem = ({ item }) => (
    <View style={styles.listItem}>
      <View></View>
      <View style={styles.iconlist}>{item.icon}</View>
      <Text style={styles.textlist}>{item.text}</Text>
    </View>
  );

  return (
    <ImageBackground source={fondo} resizeMode={"cover"} style={styles.image}>
      <View style={styles.uxContainer}>
        <View style={styles.header}>
          <AntDesign
            onPress={handleGoBack}
            name="arrowleft"
            size={30}
            color={colors.clear}
          />
        </View>
      </View>
      <View style={styles.logo}>
        <Ionicons
          name="ios-infinite-sharp"
          size={45}
          color={colors.secondary}
        />
      </View>
      <View style={styles.listcontainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    </ImageBackground>
  );
};

export default UserUi;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingTop: 30,
    paddingLeft: 20,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
    paddingLeft: 20,
  },
  iconlist: {},
  textlist: {
    fontSize: 20,
    color: colors.clear,
    marginLeft: 30,
  },
});
