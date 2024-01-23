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
        <View>
          <Pressable
            onPress={() => navigation.navigate("ImageSelector")}
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
        </View>
        <View style={styles.userDataContainer}>
          <Text style={styles.userTitle}>{user_data.name}</Text>
          <Text style={styles.userData}>{user_data.role}</Text>
          <Text style={styles.userData}>Nivel: {user_data.level}</Text>
          <Text style={styles.userData}>Dirección: {user_data.address}</Text>
          <Text style={styles.userData}>{user_data.city}</Text>
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    gap: 20,
    alignItems: "flex-start",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  userDataContainer: {
    marginTop: 10,
  },
  userTitle: {
    fontSize: 16,
  },
  imageContainer: {
    borderRadius: 100,
  },
  userData: {
    fontSize: 12,
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
});
