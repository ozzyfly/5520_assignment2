import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import ButtonComponent from '../components/ButtonComponent';

const mockData = [
  // Mock data for testing
  { id: '1', name: 'Book', price: 150 },
  { id: '2', name: 'Headphones', price: 250 },
];

const AllExpenses = ({ navigation }) => {
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

export default AllExpenses;
