import React, { useState } from "react";
import { View, TextInput, Text, Alert, StyleSheet } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import { isValidString, isValidNumber } from "../utils/validation";
import { addNewExpense } from "../utils/firestoreHelper";
import { commonStyles } from "../styles/commonStyles";
import QuantityDropDownPicker from "../components/QuantityDropDownPicker"; // Import the QuantityDropDownPicker component

const AddExpense = ({ navigation }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [open, setOpen] = useState(false);

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
      price: parseFloat(price).toFixed(2),
      quantity: parseInt(quantity, 10),
    };

    try {
      await addNewExpense(expense);
      Alert.alert("Success", "Expense added successfully!");
      setName("");
      setPrice("");
      setQuantity("1");
      setOpen(false);
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
      <QuantityDropDownPicker
        quantity={quantity}
        setQuantity={setQuantity}
        open={open}
        setOpen={setOpen}
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
