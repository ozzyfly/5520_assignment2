import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import ButtonComponent from '../components/ButtonComponent';

const mockData = [
  // Mock data for testing, adjust as per your data structure
  { id: '2', name: 'Headphones', price: 600 },
];

const OverbudgetExpenses = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <FlatList
        data={mockData}
        renderItem={({ item }) => <Text>{item.name}: ${item.price}</Text>}
        keyExtractor={(item) => item.id}
      />
      <ButtonComponent
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />
    </View>
  );
};

export default OverbudgetExpenses;
