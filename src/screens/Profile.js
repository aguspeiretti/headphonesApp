import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import user_data from "../data/userdata";
import { colors } from "../global/Colors";
import { useState, useContext, useEffect } from "react";
import { globalContext } from "../context/GlobalContext";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { serviceContext } from "../context/ServContext";

const Profile = ({ navigation }) => {
  const useGlobalContext = useContext(globalContext);
  const { selectedImage, user } = useGlobalContext;

  const useServContext = useContext(serviceContext);
  const { getUser } = useServContext;

  const image = selectedImage;
  const [todos, setTodos] = useState({});
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [direct, setDirect] = useState("");

  const handleGoBack = () => {
    navigation.goBack();
  };

  const filterDataByEmail = (data, email) => {
    console.log(data, email);
    return Object.keys(data)
      .filter((key) => data[key].email === email)
      .reduce((result, key) => {
        result[key] = data[key];
        return result;
      }, {});
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUsers = await getUser();
        setTodos(allUsers);
        console.log("todos traidos", allUsers);

        const filteredData = filterDataByEmail(allUsers, user);
        console.log("este es el usuario", filteredData);

        const info = filteredData ? filteredData["0"] : null;

        info && setCity(info.city);
        info && setDirect(info.direct);
        info && setEmail(info.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Maneja el error según tus necesidades
      }
    };

    fetchData();
  }, [user]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign
            onPress={handleGoBack}
            name="arrowleft"
            size={30}
            color={colors.secondaryLight}
          />
          <Octicons
            onPress={() => navigation.navigate("Home")}
            name="home"
            size={28}
            color={colors.secondary}
          />
        </View>
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
          <Text style={styles.userTitle}>{email ? email : "null"}</Text>
          <Text style={styles.userData}>Clienter</Text>
          <View style={styles.infoData}>
            <Text style={styles.userData}>Ciudad: {city ? city : "null"}</Text>
            <Text style={styles.userData}>
              Dirección: {direct ? direct : "null"}
            </Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    width: "100%",
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
