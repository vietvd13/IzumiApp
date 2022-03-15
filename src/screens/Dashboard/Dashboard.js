import { StyleSheet } from 'react-native';
import React from 'react';
import Layout from '../../layout';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Layout navigation={navigation} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Dashboard;