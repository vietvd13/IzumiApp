import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../Navbar';

const InternalNewsLetter = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>社内報</Text>
      </View>
    </View>
  )
}

export default InternalNewsLetter;