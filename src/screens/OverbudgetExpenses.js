import React from 'react';
import { View } from 'react-native';
import ExpensesList from '../components/ExpensesList';
import ButtonComponent from '../components/ButtonComponent';
import { commonStyles } from '../styles/commonStyles';

const mockData = [
  { id: '2', name: 'Headphones', price: 600 },
];

const OverbudgetExpenses = ({ navigation }) => {
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

export default OverbudgetExpenses;
