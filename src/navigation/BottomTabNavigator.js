import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import OverbudgetExpenses from '../screens/OverbudgetExpenses';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Overbudget') {
            iconName = focused ? 'alert-circle' : 'alert-circle-outline'; 
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [{ display: 'flex' }, null]
      })}
    >
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Overbudget" component={OverbudgetExpenses} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
