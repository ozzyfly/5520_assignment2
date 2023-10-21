import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AllExpenses from "../screens/AllExpenses";
import OverbudgetExpenses from "../screens/OverbudgetExpenses";
import AddExpense from "../screens/AddExpense";
import EditExpense from "../screens/EditExpense";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="AllExpenses"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f7f7f7",
        },
        headerTintColor: "#333",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={({ navigation }) => ({
          title: "All Expenses",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("AddExpense")}>
              <Ionicons
                name="add-circle-outline"
                size={24}
                color="#333"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpense}
        options={{ title: "Add Expense" }}
      />
      <Stack.Screen
        name="EditExpense"
        component={EditExpense}
        options={{ title: "Edit Expense" }}
      />
    </Stack.Navigator>
  );
}

export function OverbudgetStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OverbudgetExpenses"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f7f7f7",
        },
        headerTintColor: "#333",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="OverbudgetExpenses"
        component={OverbudgetExpenses}
        options={{ title: "Overbudget Expenses" }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
