import React, { useState } from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import DropdownPicker from '../components/DropdownPicker';
import { commonStyles } from '../styles/commonStyles';

const AddExpense = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('1');

  const handleSave = () => {
    if (!name || !price) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    if (isNaN(price) || price <= 0) {
      Alert.alert('Error', 'Enter a valid price.');
      return;
    }

    console.log(name, price, quantity);
    // Logic to save the data would be placed here
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
      <ButtonComponent title="Save" onPress={handleSave} />
    </View>
  );
};

export default AddExpense;
