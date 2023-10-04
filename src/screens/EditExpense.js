import React, { useState } from 'react';
import { View, TextInput, Text, Switch } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import ButtonComponent from '../components/ButtonComponent';

const EditExpense = ({ route }) => {
  const { item } = route.params;

  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(String(item.price));
  const [isOverbudget, setIsOverbudget] = useState(price > 500);

  const handleSave = () => {
    // Logic for updating the item goes here
    console.log(name, price, isOverbudget);
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
      <Text>Overbudget:</Text>
      <Switch
        value={isOverbudget}
        onValueChange={setIsOverbudget}
      />
      <ButtonComponent title="Save" onPress={handleSave} />
    </View>
  );
};

export default EditExpense;
