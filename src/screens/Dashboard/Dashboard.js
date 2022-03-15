import { View, StyleSheet } from 'react-native';
import React from 'react';
import Layout from '../../layout';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Layout />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Dashboard;