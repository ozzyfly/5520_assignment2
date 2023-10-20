import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const StepperInput = ({ value, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onDecrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.valueText}>{value}</Text>
      <TouchableOpacity style={styles.button} onPress={onIncrement}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
  buttonText: {
    fontSize: 18,
  },
  valueText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default StepperInput;
