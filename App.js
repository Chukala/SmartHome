import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Devices from './Components/Devices/Devices';
import Header from './Components/Header/Header';
import Rooms from './Components/Rooms/Rooms';

const App = () => {
  return (
    <View style={styles.container}>
        <Header />
        <Rooms />
        <Devices />
        <Text style={styles.deviceCount}>Total Devices On: 1</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'flexStart',
    justifyContent: 'flexStart',
    },
  deviceCount: {
    fontWeight:'bold',
    paddingHorizontal: '10px',
  }
});

export default App;
