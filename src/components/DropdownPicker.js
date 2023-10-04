import React from 'react';
import { View, Picker } from 'react-native';

const DropdownPicker = ({ selectedValue, onValueChange, items }) => {
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default DropdownPicker;
