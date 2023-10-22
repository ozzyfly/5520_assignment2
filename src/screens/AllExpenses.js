import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import ExpensesList from "../components/ExpensesList";
import { commonStyles } from "../styles/commonStyles";
import { listenToExpensesUpdates } from "../utils/firestoreHelper";
import { Ionicons } from "@expo/vector-icons";

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
      <TouchableOpacity
        style={{ alignSelf: "center", marginTop: 20 }}
        onPress={() => navigation.navigate("AddExpense")}
      >
        <Ionicons name="add-circle-outline" size={50} color="#4a90e2" />
      </TouchableOpacity>
    </View>
  );
};

export default AllExpenses;
