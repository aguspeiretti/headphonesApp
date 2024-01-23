import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { colors } from "../global/Colors";
import { globalContext } from "../context/GlobalContext";

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const { productId } = route.params;
  const useGlobalContext = useContext(globalContext);
  const { rtData, addToCart } = useGlobalContext;

  const productSelected = rtData.find((product) => product.id == productId);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.ProductDetailContainer}>
      <View style={styles.contenedorBlanco}>
        <View style={styles.header}>
          <AntDesign
            onPress={handleGoBack}
            name="arrowleft"
            size={30}
            color={colors.secondaryLight}
          />
          <Feather
            onPress={() => navigation.navigate("Cart")}
            name="shopping-bag"
            size={30}
            color={colors.secondaryLight}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: productSelected.thumbnail }}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.title}>{productSelected.title}</Text>
        </View>
        <View>
          <Text style={styles.description}>{productSelected.description}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 25,
        }}
      >
        <View style={styles.informacionAdicional}>
          <Text style={styles.priceTitle}>PRICE</Text>
          <Text style={styles.price}>${productSelected.price}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => addToCart(productSelected)}
            style={styles.buttonCart}
          >
            <Feather
              name="shopping-bag"
              size={20}
              color={colors.secondaryLight}
            />
            <Text style={styles.textButton}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  ProductDetailContainer: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: "100%",
  },
  contenedorBlanco: {
    width: "100%",
    height: "87%",
    backgroundColor: colors.white,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    color: colors.secondaryLight,
    fontSize: 25,
    paddingHorizontal: 25,
  },
  description: {
    color: colors.secondaryLighter,
    fontSize: 18,
    paddingHorizontal: 25,
    marginTop: 20,
  },
  price: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "bold",
  },
  priceTitle: {
    color: colors.primary,
  },
  informacionAdicional: {},
  buttonCart: {
    backgroundColor: colors.primary,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  textButton: {
    color: colors.secondary,
    marginLeft: 10,
    fontWeight: "500",
  },
});
