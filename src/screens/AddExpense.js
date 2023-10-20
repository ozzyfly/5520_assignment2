import React, { useState } from "react";
import { View, TextInput, Text, Alert, StyleSheet } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import { isValidString, isValidNumber } from "../utils/validation";
import { addNewExpense } from "../utils/firestoreHelper";
import { commonStyles } from "../styles/commonStyles";
import StepperInput from "../components/StepperInput";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("1");

  const handleSave = async () => {
    if (!isValidString(name)) {
      Alert.alert("Error", "Please provide a valid item name.");
      return;
    }

    if (!isValidNumber(price)) {
      Alert.alert("Error", "Please provide a valid price.");
      return;
    }

    if (!isValidNumber(quantity)) {
      Alert.alert("Error", "Please provide a valid quantity.");
      return;
    }

    const expense = {
      name,
      price: parseFloat(price).toFixed(2), // Convert string to number and handle floating point issues
      quantity: parseInt(quantity, 10), // Convert string to integer
    };

    try {
      await addNewExpense(expense);
      Alert.alert("Success", "Expense added successfully!");
      setName("");
      setPrice("");
      setQuantity("1");
    } catch (error) {
      Alert.alert("Error", "Failed to add the expense. Please try again.");
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={styles.label}>Item Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter item name"
        style={styles.input}
      />
      <Text style={styles.label}>Price:</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
        style={styles.input}
      />
      <Text style={styles.label}>Quantity:</Text>
      <StepperInput
        value={quantity}
        onIncrement={() =>
          setQuantity((prev) => (parseInt(prev, 10) + 1).toString())
        }
        onDecrement={() =>
          setQuantity((prev) => (parseInt(prev, 10) - 1).toString())
        }
      />
      <ButtonComponent title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default AddExpense;
