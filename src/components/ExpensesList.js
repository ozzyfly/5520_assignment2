import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { commonStyles } from '../styles/commonStyles';

const ExpensesList = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('EditExpense', { item })}
        >
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.name}: ${item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
