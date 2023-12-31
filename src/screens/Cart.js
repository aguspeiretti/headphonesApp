import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { colors } from "../global/Colors";
import { useNavigation } from "@react-navigation/native";
import PIC from "../data/productInCart";
import Counter from "../components/Counter";
import { Feather } from "@expo/vector-icons";

const Cart = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
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
          {PIC.map((p) => (
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
                <Text style={styles.price}>${p.price}</Text>
              </View>
              <Counter />
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
          <Text style={styles.pricetot}>$ 499.98</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonCart}>
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
