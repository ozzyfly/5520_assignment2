import React, { useState } from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import DropdownPicker from '../components/DropdownPicker';
import { commonStyles } from '../styles/commonStyles';

const EditExpense = ({ route }) => {
  const { item } = route.params;

  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(String(item.price));
  const [quantity, setQuantity] = useState(String(item.quantity));

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
