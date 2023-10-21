import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ExpensesList from "../components/ExpensesList";
import ButtonComponent from "../components/ButtonComponent";
import { commonStyles } from "../styles/commonStyles";
import { listenToExpensesUpdates } from "../utils/firestoreHelper";

const OverbudgetExpenses = ({ navigation }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const unsubscribe = listenToExpensesUpdates(
      (expensesData) => {
        const overBudgetExpenses = expensesData
          .filter((expense) => expense.price > 500)
          .map((expense) => {
            const totalCost = expense.quantity * expense.price;
            return {
              ...expense,
              isOverBudget: totalCost > 500, // Add this line
            };
          });
        setExpenses(overBudgetExpenses);
      },
      (error) => {
        console.error("Error listening to expense updates:", error);
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
