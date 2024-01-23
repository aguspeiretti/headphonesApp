import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../global/Colors";
import * as ImagePicker from "expo-image-picker";
import { globalContext } from "../context/GlobalContext";

const ImageSelector = ({ navigation }) => {
  const useGlobalContext = useContext(globalContext);
  const { handleImageConfirm } = useGlobalContext;

  const [image, setImage] = useState("");

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    console.log("Permisos otorgados");
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    } else {
      console.log("No se han otorgado permisos para usar la cámara");
    }
  };

  const confirmImage = (image) => {
    console.log("hola");
    handleImageConfirm(image);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={pickImage}>
              <Text style={styles.textBtn}>Tomar otra</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.btn, ...styles.btnConfirm }}
              onPress={() => {
                confirmImage(image);
              }}
            >
              <Text style={styles.textBtn}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.noImageContainer}>
          <MaterialIcons name="no-photography" size={200} color="#ccc" />
          <TouchableOpacity style={styles.btn} onPress={pickImage}>
            <Text style={styles.textBtn}>Abrir cámara</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  noImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 50,
  },
  textBtn: {
    color: "#fff",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 250,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 10,
  },
  btnConfirm: {
    backgroundColor: colors.success,
    paddingHorizontal: 50,
  },
});
