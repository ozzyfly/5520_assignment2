import React, { useState } from "react";
import { View, TextInput, Text, Alert, TouchableOpacity } from "react-native";
import { isValidString, isValidNumber } from "../utils/validation";
import { updateExpense, deleteExpense } from "../utils/firestoreHelper";
import { commonStyles } from "../styles/commonStyles";
import QuantityDropDownPicker from "../components/QuantityDropDownPicker";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckBox from "expo-checkbox";
import ButtonComponent from "../components/ButtonComponent";

const EditExpense = ({ route, navigation }) => {
  const { item, isOverbudget, budgetLimit } = route.params;
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(String(item.price));
  const [quantity, setQuantity] = useState(String(item.quantity));
  const [isChecked, setIsChecked] = useState(isOverbudget);
  const [open, setOpen] = useState(false);

  const handleSave = async () => {
    Alert.alert(
      "Important!",
      "Are you sure you want to save these changes?",
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            if (
              !isValidString(name) ||
              !isValidNumber(price) ||
              !isValidNumber(quantity)
            ) {
              let errorMessage = !isValidString(name)
                ? "Please provide a valid item name."
                : !isValidNumber(price)
                ? "Please provide a valid price."
                : "Please provide a valid quantity.";
              Alert.alert("Error", errorMessage);
              return;
            }

            const totalCost = Number(price) * Number(quantity);
            const isItemOverBudget = totalCost > budgetLimit && !isChecked;

            const updatedExpense = {
              name,
              price: Number(price),
              quantity: Number(quantity),
              isOverBudget: isItemOverBudget,
            };

            try {
              await updateExpense(item.id, updatedExpense);
              navigation.goBack();
            } catch (error) {
              Alert.alert("Error", "Failed to update the expense.");
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleDelete = async () => {
    try {
      await deleteExpense(item.id);
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to delete the expense.");
    }
  };

  React.useEffect(() => {
    navigation.setParams({ handleDelete });
  }, []);

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.label}>Item:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter item name"
        style={commonStyles.input}
      />
      <Text style={commonStyles.label}>Unit Price:</Text>
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
            onValueChange={setIsChecked}
            color={isChecked ? "#4630eb" : "#ccc"}
          />
          <Text>
            This item is marked as overbudget. Select the checkbox if you would
            like to approve it.
          </Text>
        </View>
      )}
      <View style={commonStyles.buttonContainer}>
        <ButtonComponent
          title="Cancel"
          onPress={() => navigation.goBack()}
          style={commonStyles.cancelButton}
        />
        <ButtonComponent title="Save" onPress={handleSave} />
      </View>
    </View>
  );
};

export default EditExpense;
