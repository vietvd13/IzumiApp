import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../Navbar';

const PayCheck = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>給与明細</Text>
      </View>
    </View>
  )
}

export default PayCheck;