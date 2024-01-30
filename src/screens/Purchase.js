import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../global/Colors";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Purchase = ({ route }) => {
  const { cartItems } = route.params;

  const cartItemss = cartItems ? cartItems : [];

  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.purchaseContainer}>
      <View style={styles.header}>
        <AntDesign
          onPress={handleGoBack}
          name="arrowleft"
          size={30}
          color={colors.white}
        />
        <Octicons
          onPress={() => navigation.navigate("Home")}
          name="home"
          size={28}
          color={colors.white}
        />
      </View>
      <Text style={styles.itemsTitle}>Your purchase:</Text>
      <View style={styles.productListPay}>
        {cartItemss.map((p) => (
          <View key={p.id} style={styles.purchaseItem}>
            <View>
              <Text>{p.title}</Text>
            </View>
            <Text style={styles.price}>${p.price}</Text>
          </View>
        ))}
        <View style={styles.priceContainerPurchase}>
          <Text style={styles.totalMount}>
            Total: $
            {cartItems.reduce(function (a, b) {
              return a + b.price;
            }, 0)}
          </Text>
        </View>
        <Text style={styles.PayTitle}>Payment Method</Text>
      </View>
      <View style={styles.payButtons}>
        <View style={styles.pBut}>
          <Text style={styles.textPay}>Credit Card</Text>
          <Fontisto name="visa" size={24} color="#fff" />
        </View>
        <View style={styles.pBut}>
          <Text style={styles.textPay}>Debit Card</Text>
          <Fontisto name="mastercard" size={24} color="#fff" />
        </View>
        <View style={styles.pBut}>
          <Text style={styles.textPay}>E-wallet</Text>
          <Fontisto name="paypal" size={24} color="#fff" />
        </View>
        <View style={styles.pBut}>
          <Text style={styles.textPay}>Banking</Text>
          <FontAwesome name="bank" size={24} color="#fff" />
        </View>
        <View style={styles.cont}>
          <TouchableOpacity
            style={styles.pButton}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.textPay}>Login to purchase</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  blurButton: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 100,
    width: "120%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
  },
  logButton: {
    position: "relative",
    bottom: 0,
  },
  purchaseContainer: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: "100%",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
  },
  purchaseItem: {
    flexDirection: "row",
    backgroundColor: colors.clear,
    borderBottomWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemsTitle: {
    fontSize: 30,
    color: colors.white,
    marginBottom: 30,
  },
  totalMount: {
    fontSize: 25,
    color: colors.white,
    marginTop: 30,
    color: colors.primary,
  },
  priceContainerPurchase: {
    width: "100%",
    alignItems: "flex-end",
  },
  PayTitle: {
    fontSize: 30,
    color: colors.white,
    marginTop: 30,
  },
  payButtons: {
    marginTop: 20,
  },
  pBut: {
    height: 60,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.primary,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  textPay: {
    color: colors.white,
    fontSize: 20,
  },
  logButton: {
    backgroundColor: colors.primary,
    color: "#000",
  },
  pButton: {
    backgroundColor: colors.primary,
    width: "50%",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  cont: {
    width: "100%",
    alignItems: "center",
  },
});
