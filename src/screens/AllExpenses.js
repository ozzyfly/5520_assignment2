import React from 'react';
import { View } from 'react-native';
import ExpensesList from '../components/ExpensesList';
import ButtonComponent from '../components/ButtonComponent';
import { commonStyles } from '../styles/commonStyles';

const mockData = [
  // Mock data for testing
  { id: '1', name: 'Book', price: 150 },
  { id: '2', name: 'Headphones', price: 250 },
];

const AllExpenses = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <ExpensesList data={mockData} navigation={navigation} />
      <ButtonComponent
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />
    </View>
  );
};

export default AllExpenses;
