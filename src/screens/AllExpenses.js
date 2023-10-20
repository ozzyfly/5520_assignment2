import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ExpensesList from "../components/ExpensesList";
import ButtonComponent from "../components/ButtonComponent";
import { commonStyles } from "../styles/commonStyles";
import { listenToExpensesUpdates } from "../utils/firestoreHelper";

const AllExpenses = ({ navigation }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const unsubscribe = listenToExpensesUpdates(
      (updatedExpenses) => {
        setExpenses(updatedExpenses);
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
      <ExpensesList data={expenses} navigation={navigation} />
      <ButtonComponent
        title="Add Expense"
        onPress={() => navigation.navigate("AddExpense")}
      />
    </View>
  );
};

export default AllExpenses;
