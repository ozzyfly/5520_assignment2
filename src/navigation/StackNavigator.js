import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllExpenses from '../screens/AllExpenses';
import AddExpense from '../screens/AddExpense';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="AllExpenses">
      <Stack.Screen name="AllExpenses" component={AllExpenses} />
      <Stack.Screen name="AddExpense" component={AddExpense} />
      {/* Add other screens as needed */}
    </Stack.Navigator>
  );
}

export default StackNavigator;
