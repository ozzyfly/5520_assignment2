import React, { useState, useEffect } from "react";
import { View, Alert, TouchableOpacity } from "react-native";
import ExpensesList from "../components/ExpensesList";
import { commonStyles } from "../styles/commonStyles";
import { listenToExpensesUpdates } from "../utils/firestoreHelper";
import { Ionicons } from "@expo/vector-icons";

const OVERBUDGET_LIMIT = 500;

const OverbudgetExpenses = ({ navigation }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const unsubscribe = listenToExpensesUpdates(
      (expensesData) => {
        const overBudgetExpenses = expensesData
          .filter((expense) => {
            const totalCost = expense.quantity * expense.price;
            return (
              totalCost > OVERBUDGET_LIMIT && expense.isOverBudget !== false
            );
          })
          .map((expense) => ({
            ...expense,
            isOverBudget: true,
          }));
        setExpenses(overBudgetExpenses);
      },
      (error) => {
        console.error("Error listening to expense updates:", error);
        Alert.alert("Error", "Failed to fetch expenses. Please try again.");
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <View style={commonStyles.container}>
      <ExpensesList data={expenses} navigation={navigation} />
      <TouchableOpacity
        style={{ alignSelf: "center", marginTop: 20 }}
        onPress={() => navigation.navigate("AddExpense")}
      >
        <Ionicons name="add-circle-outline" size={50} color="#4a90e2" />
      </TouchableOpacity>
    </View>
  );
};

export default OverbudgetExpenses;
