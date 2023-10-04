import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import { commonStyles } from '../styles/commonStyles';

const AddExpense = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    // Add saving logic here
    console.log(name, price);
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
      <ButtonComponent title="Save" onPress={handleSave} />
    </View>
  );
};

export default AddExpense;
