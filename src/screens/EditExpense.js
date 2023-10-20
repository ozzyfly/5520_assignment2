import React, { useState } from "react";
import { View, TextInput, Text, Alert } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import { isValidString, isValidNumber } from "../utils/validation";
import { updateExpense } from "../utils/firestoreHelper";
import StepperInput from "../components/StepperInput";
import { commonStyles } from "../styles/commonStyles";

const EditExpense = ({ route, navigation }) => {
  const { item } = route.params;

  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(String(item.price));
  const [quantity, setQuantity] = useState(Number(item.quantity));

  const handleSave = async () => {
    if (!isValidString(name)) {
      Alert.alert("Error", "Please provide a valid item name.");
      return;
    }

    if (!isValidNumber(price)) {
      Alert.alert("Error", "Please provide a valid price.");
      return;
    }

    if (!isValidNumber(String(quantity))) {
      Alert.alert("Error", "Please provide a valid quantity.");
      return;
    }

    const updatedExpense = {
      name,
      price: Number(price),
      quantity,
    };

    try {
      await updateExpense(item.id, updatedExpense);
      Alert.alert("Success", "Expense updated successfully.");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to update the expense.");
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text>Item Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter item name"
      />
      <Text>Price:</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
      />
      <Text>Quantity:</Text>
      <StepperInput
        value={quantity}
        onIncrement={() => setQuantity((prev) => prev + 1)}
        onDecrement={() => setQuantity((prev) => Math.max(1, prev - 1))}
      />
      <ButtonComponent title="Update" onPress={handleSave} />
    </View>
  );
};

export default EditExpense;
