import { View, Text } from 'react-native';
import React from 'react';
import Navbar from '../Navbar';

const Setting = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <View style={{ flex: 1, padding: 10 }}>
        <Text>設定</Text>
      </View>
    </View>
  )
}

export default Setting;