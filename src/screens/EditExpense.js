import React, { useState } from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import DropdownPicker from '../components/DropdownPicker';
import { isValidString, isValidNumber } from '../utils/validation';

const EditExpense = ({ route }) => {
  const { item } = route.params;

  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(String(item.price));
  const [quantity, setQuantity] = useState(String(item.quantity));

  const handleSave = () => {
    if (!isValidString(name)) {
      Alert.alert('Error', 'Please provide a valid item name.');
      return;
    }

    if (!isValidNumber(price)) {
      Alert.alert('Error', 'Please provide a valid price.');
      return;
    }

    if (!isValidNumber(quantity)) {
      Alert.alert('Error', 'Please provide a valid quantity.');
      return;
    }

    console.log(name, price, quantity);
    // Logic to update the data would be placed here
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
      <DropdownPicker 
        selectedValue={quantity}
        onValueChange={(value) => setQuantity(value)}
        items={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          // ... you can expand this list
        ]}
      />
      <ButtonComponent title="Update" onPress={handleSave} />
    </View>
  );
};

export default EditExpense;
