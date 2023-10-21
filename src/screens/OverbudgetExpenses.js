import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import ExpensesList from "../components/ExpensesList";
import ButtonComponent from "../components/ButtonComponent";
import { commonStyles } from "../styles/commonStyles";
import { listenToExpensesUpdates } from "../utils/firestoreHelper";

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
      <ButtonComponent
        title="Add Expense"
        onPress={() => navigation.navigate("AddExpense")}
      />
    </View>
  );
};

export default OverbudgetExpenses;
