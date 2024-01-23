import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import user_data from "../data/userdata";
import { colors } from "../global/Colors";
import { useState, useContext } from "react";
import { globalContext } from "../context/GlobalContext";

const Profile = ({ navigation }) => {
  const useGlobalContext = useContext(globalContext);
  const { selectedImage } = useGlobalContext;

  const image = selectedImage;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgConteiner}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#DCDCDC" : "#E8E8E8",
              },
              styles.imageContainer,
            ]}
          >
            {image ? (
              <Image
                source={{ uri: image }}
                style={styles.profilePicture}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require("../../assets/images/user.png")}
                style={styles.profilePicture}
                resizeMode="contain"
              />
            )}
          </Pressable>
          <View>
            <Pressable
              onPress={() => navigation.navigate("ImageSelector")}
              style={styles.fotoAdd}
            >
              <Text style={styles.name}>add +</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.userDataContainer}>
          <Text style={styles.userTitle}>{user_data.name}</Text>
          <Text style={styles.userData}>{user_data.role}</Text>
          <View style={styles.infoData}>
            <Text style={styles.userData}>Nivel: {user_data.level}</Text>
            <Text style={styles.userData}>Dirección: {user_data.address}</Text>
            <Text style={styles.userData}>{user_data.city}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 20,
    gap: 20,
    alignItems: "center",
    paddingTop: 50,
  },
  imgContainer: {
    position: "relative",
  },
  fotoAdd: {
    backgroundColor: colors.primary,
    width: 50,
    height: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  userDataContainer: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  userTitle: {
    fontSize: 20,
  },
  imageContainer: {
    borderRadius: 200,
  },
  userData: {
    fontSize: 15,
  },
  addressContainer: {
    alignItems: "center",
    gap: 5,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.primaryBack,
  },
  addressTitle: {
    fontSize: 14,
    color: "#fff",
  },
  addressDescription: {
    color: "#fff",
  },
  infoData: {
    marginTop: 20,
  },
});
