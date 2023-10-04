import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllExpenses from '../screens/AllExpenses';
import OverbudgetExpenses from '../screens/OverbudgetExpenses';
import AddExpense from '../screens/AddExpense';
import EditExpense from '../screens/EditExpense';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="AllExpenses">
      <Stack.Screen name="AllExpenses" component={AllExpenses} />
      <Stack.Screen name="OverbudgetExpenses" component={OverbudgetExpenses} />
      <Stack.Screen name="AddExpense" component={AddExpense} />
      <Stack.Screen name="EditExpense" component={EditExpense} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
