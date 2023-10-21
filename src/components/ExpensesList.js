import React from "react";
import { Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const ExpensesList = ({ data, navigation, budgetLimit }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("EditExpense", { item })}
          style={styles.itemContainer}
        >
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemPrice}>
            {item.isOverBudget ? "⚠️" : ""}
            {item.quantity} x ${item.price}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
  },
});

export default ExpensesList;
