import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { commonStyles } from "../styles/commonStyles";

const ButtonComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={commonStyles.button} onPress={onPress}>
      <Text style={commonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
