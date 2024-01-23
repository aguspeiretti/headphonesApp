import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../global/Colors";

const Input = ({ label, isSecureEntry = false, error = "", onChange }) => {
  const [input, setInput] = useState();

  const onHandleChangeText = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onHandleChangeText}
        secureTextEntry={isSecureEntry}
        value={input}
        placeholder={label}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.clear,
    borderRadius: 18,
    width: "100%",
    backgroundColor: colors.clear,
    color: "#000",
    padding: 18,
    marginBottom: 20,
  },

  error: {
    padding: 10,
    color: "#FFF",
  },
});
