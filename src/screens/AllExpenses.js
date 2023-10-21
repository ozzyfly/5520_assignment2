import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ExpensesList from "../components/ExpensesList";
import ButtonComponent from "../components/ButtonComponent";
import { commonStyles } from "../styles/commonStyles";
import { listenToExpensesUpdates } from "../utils/firestoreHelper";

const AllExpenses = ({ navigation }) => {
  const [expenses, setExpenses] = useState([]);
  const BUDGET_LIMIT = 500;
  const [budgetLimit, setBudgetLimit] = useState(BUDGET_LIMIT);

  useEffect(() => {
    const unsubscribe = listenToExpensesUpdates(
      (updatedExpenses) => {
        const computedExpenses = updatedExpenses.map((expense) => {
          const totalCost = expense.quantity * expense.price;
          if (expense.isOverBudget === undefined) {
            return {
              ...expense,
              isOverBudget: totalCost > BUDGET_LIMIT,
            };
          }
          return expense;
        });

        setExpenses(computedExpenses);
      },
      (error) => {
        console.error("Error fetching expenses:", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={commonStyles.container}>
      <ExpensesList
        data={expenses}
        navigation={navigation}
        budgetLimit={budgetLimit}
      />
      <ButtonComponent
        title="Add Expense"
        onPress={() => navigation.navigate("AddExpense")}
      />
    </View>
  );
};

export default AllExpenses;
