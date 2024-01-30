import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";

import Input from "../components/Input";
import { colors } from "../global/Colors";
import head from "../../assets/images/headwall.jpg";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign, Feather } from "@expo/vector-icons";
import { globalContext } from "../context/GlobalContext";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const useGlobalContext = useContext(globalContext);
  const { handleSignIn } = useGlobalContext;
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSing = async () => {
    try {
      await handleSignIn(email, password);
      console.log("SignIn successful");
      navigation.navigate("Home");
    } catch (error) {
      console.error("SignIn error:", error);
      // Maneja el error según tus necesidades
    }
  };

  return (
    <ImageBackground
      source={head}
      resizeMode={"cover"}
      style={styles.image}
      blurRadius={2}
    >
      <View style={styles.signContainer}>
        <View style={styles.parse}>
          <AntDesign
            onPress={handleGoBack}
            name="arrowleft"
            size={30}
            color={colors.white}
          />
          <View style={styles.logo}>
            <Ionicons
              name="ios-infinite-sharp"
              size={45}
              color={colors.secondary}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputView}>
            <Input
              label="Email:"
              onChange={setEmail}
              error={null}
              style={styles.input}
            />
            <Input
              label="Contraseña:"
              onChange={setPassword}
              isSecureEntry={true}
              error={null}
              style={styles.input}
            />
          </View>
          <TouchableOpacity onPress={handleSing} style={styles.btnSign}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.btnText}>SingUp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.btnText}>LogIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingTop: 30,
    paddingLeft: 20,
  },
  signContainer: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 80,
  },
  btn: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 8,
    margin: 5,
  },
  btnText: {
    color: "#fff",
    fontWeight: "400",
  },
  altContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  subtitle: {
    color: "#fff",

    fontSize: 12,
  },
  subtitleLink: {
    color: "#fff",
    fontSize: 11,
    textDecorationLine: "underline",
  },
  inputContainer: {
    width: "100%",
    height: "60%",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 2,
    borderColor: colors.clear,
    borderRadius: 16,
  },
  btn1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff70",
    padding: 16,
    borderRadius: 6,
  },
  btn2: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  btnSign: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 18,
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  inputView: {
    width: "100%",
    marginBottom: 40,
  },
  parse: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
