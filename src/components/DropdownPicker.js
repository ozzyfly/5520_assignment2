import React from 'react';
import { View} from 'react-native';
import { Picker } from '@react-native-picker/picker';


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
