import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AllExpenses from "../screens/AllExpenses";
import OverbudgetExpenses from "../screens/OverbudgetExpenses";
import AddExpense from "../screens/AddExpense";
import EditExpense from "../screens/EditExpense";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="AllExpenses"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4a90e2",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
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
                name="add"
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
        options={{ title: "Edit Expense" }} // Remove the headerRight from here
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
          backgroundColor: "#4a90e2",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="OverbudgetExpenses"
        component={OverbudgetExpenses}
        options={({ navigation }) => ({
          title: "Overbudget Expenses",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("AddExpense")}>
              <Ionicons
                name="add"
                size={24}
                color="#333"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
