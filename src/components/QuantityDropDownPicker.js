import React from "react";
import { Modal, Button, FlatList, Text, View, StyleSheet } from "react-native";

const QuantityDropDownPicker = ({ quantity, setQuantity, open, setOpen }) => {
  const quantityOptions = Array.from({ length: 10 }, (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString(),
  }));

  const selectItem = (item) => {
    setQuantity(item.value);
    setOpen(false);
  };

  const buttonTitle = quantity ? `Quantity: ${quantity}` : "Select Quantity";

  return (
    <>
      <Button title={buttonTitle} onPress={() => setOpen(true)} />
      <Modal animationType="fade" transparent={true} visible={open}>
        <View style={styles.modalContainer}>
          <View style={styles.dropdown}>
            <FlatList
              data={quantityOptions}
              renderItem={({ item }) => (
                <Text onPress={() => selectItem(item)} style={styles.item}>
                  {item.label}
                </Text>
              )}
              keyExtractor={(item) => item.value}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: 200,
    maxHeight: 250,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    elevation: 5,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
});

export default QuantityDropDownPicker;
