import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { colors } from "../global/Colors";
import { useNavigation } from "@react-navigation/native";
import PIC from "../data/productInCart";
import Counter from "../components/Counter";
import { Feather } from "@expo/vector-icons";
import { globalContext } from "../context/GlobalContext";

const Cart = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const useGlobalContext = useContext(globalContext);
  const { cartItems } = useGlobalContext;

  const calculateTotalPrice = () => {
    // Use reduce to sum up the prices of all products in the cart
    const totalPrice = cartItems.reduce(
      (sum, product) => sum + product.price,
      0
    );
    return totalPrice.toFixed(2); // Format the total price with two decimal places
  };

  return (
    <View style={styles.CartContainer}>
      <View style={styles.contenedorBlanco}>
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
        <View style={styles.cardsContainer}>
          {cartItems.map((p) => (
            <View key={p.id} style={styles.cardCart}>
              <View style={styles.ImageCard}>
                <Image
                  source={{ uri: p.thumbnail }}
                  resizeMode="contain"
                  style={styles.img}
                />
              </View>
              <View>
                <Text>{p.title}</Text>
              </View>
              <Text style={styles.price}>${p.price}</Text>
            </View>
          ))}
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
          <Text style={styles.priceTitle}>TOTAL PRICE</Text>
          <Text style={styles.pricetot}>$ {calculateTotalPrice()}r</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonCart}
            onPress={() =>
              navigation.navigate("Purchase", { cartItems: cartItems })
            }
          >
            <Feather
              name="shopping-bag"
              size={20}
              color={colors.secondaryLight}
            />
            <Text style={styles.textButton}>Purchase</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  CartContainer: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
  },
  contenedorBlanco: {
    width: "100%",
    height: "87%",
    backgroundColor: colors.white,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: "#6c757d",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    elevation: 7,
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  ImageCard: {
    width: 100,
    height: 100,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  cardCart: {
    width: "95%",
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: colors.white,
    shadowColor: "#6c757d",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    elevation: 7,
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  cardsContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  pricetot: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "bold",
  },
  price: {
    color: colors.primary,
    paddingRight: 10,
    fontSize: 18,
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
