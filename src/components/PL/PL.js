import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../Navbar';

const PL = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>P/L</Text>
      </View>
    </View>
  )
}

export default PL;