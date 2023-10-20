import React, { useState } from "react";
import { View, TextInput, Text, Alert, CheckBox } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import { isValidString, isValidNumber } from "../utils/validation";
import { updateExpense, deleteExpense } from "../utils/firestoreHelper";
import { commonStyles } from "../styles/commonStyles";
import QuantityDropDownPicker from "../components/QuantityDropDownPicker"; // Import the QuantityDropDownPicker component

const EditExpense = ({ route, navigation }) => {
  const { item, isOverbudget } = route.params;

  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(String(item.price));
  const [quantity, setQuantity] = useState(String(item.quantity));
  const [isChecked, setIsChecked] = useState(isOverbudget);
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

    const updatedExpense = {
      name,
      price: Number(price),
      quantity: Number(quantity),
    };

    try {
      await updateExpense(item.id, updatedExpense);
      Alert.alert("Success", "Expense updated successfully!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to update the expense.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteExpense(item.id);
      Alert.alert("Success", "Expense deleted successfully!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to delete the expense.");
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.label}>Item Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter item name"
        style={commonStyles.input}
      />
      <Text style={commonStyles.label}>Price:</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
        style={commonStyles.input}
      />
      <Text style={commonStyles.label}>Quantity:</Text>
      <QuantityDropDownPicker
        quantity={quantity}
        setQuantity={setQuantity}
        open={open}
        setOpen={setOpen}
      />
      {isOverbudget && (
        <View style={commonStyles.checkboxContainer}>
          <CheckBox
            value={isChecked}
            onValueChange={() => setIsChecked(!isChecked)}
          />
          <Text>Mark as Overbudget</Text>
        </View>
      )}
      <ButtonComponent title="Update" onPress={handleSave} />
      <ButtonComponent
        title="Delete"
        onPress={handleDelete}
        style={commonStyles.deleteButton}
      />
    </View>
  );
};

export default EditExpense;
