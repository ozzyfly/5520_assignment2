import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllExpenses from './src/screens/AllExpenses';
import AddExpense from './src/screens/AddExpense';
import EditExpense from './src/screens/EditExpense';
import OverbudgetExpenses from './src/screens/OverbudgetExpenses';
import { commonStyles } from './src/styles/commonStyles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllExpenses" component={AllExpenses} options={{ title: 'All Expenses' }} />
      <Tab.Screen name="OverbudgetExpenses" component={OverbudgetExpenses} options={{ title: 'Overbudget' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="EditExpense" component={EditExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
