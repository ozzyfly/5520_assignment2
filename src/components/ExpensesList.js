import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { commonStyles } from "../styles/commonStyles";

const ExpensesList = ({ data, navigation }) => {
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
            {item.isOverBudget ? "⚠️" : ""} ${item.price}
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
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
  },
});

export default ExpensesList;
