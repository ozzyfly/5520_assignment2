import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { commonStyles } from "../styles/commonStyles";

const QuantityDropDownPicker = ({ quantity, setQuantity, open, setOpen }) => {
  const quantityOptions = [];
  for (let i = 1; i <= 10; i++) {
    quantityOptions.push({ label: i.toString(), value: i.toString() });
  }

  return (
    <DropDownPicker
      items={quantityOptions}
      defaultValue={quantity}
      containerStyle={commonStyles.dropdownContainer}
      style={commonStyles.dropdown}
      itemStyle={commonStyles.dropdownItem}
      dropDownStyle={commonStyles.dropdownList}
      onChangeItem={(item) => setQuantity(item.value)}
      placeholder="Select Quantity"
      labelStyle={commonStyles.dropdownLabel}
      showArrowIcon={true}
      arrowIconStyle={commonStyles.dropdownArrow}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      controller={(instance) => (controller = instance)} // Add this line to set the controller
    />
  );
};

export default QuantityDropDownPicker;
