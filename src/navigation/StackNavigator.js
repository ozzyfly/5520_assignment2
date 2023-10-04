import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllExpenses from '../screens/AllExpenses';
import OverbudgetExpenses from '../screens/OverbudgetExpenses';
import AddExpense from '../screens/AddExpense';
import EditExpense from '../screens/EditExpense';

const Stack = createStackNavigator();

// Stack Navigation setup for various screens
function StackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="AllExpenses"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f7f7f7',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="AllExpenses" component={AllExpenses} options={{ title: 'All Expenses' }} />
      <Stack.Screen name="OverbudgetExpenses" component={OverbudgetExpenses} options={{ title: 'Overbudget Expenses' }} />
      <Stack.Screen name="AddExpense" component={AddExpense} options={{ title: 'Add Expense' }} />
      <Stack.Screen name="EditExpense" component={EditExpense} options={{ title: 'Edit Expense' }} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
