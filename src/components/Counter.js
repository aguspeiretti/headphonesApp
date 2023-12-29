import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../global/Colors";

const Counter = () => {
  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.counterText}>-</Text>
      </TouchableOpacity>
      <View style={styles.counter}>
        <Text style={styles.counterText}>1</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.counterText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  counter: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 20,
  },
});
