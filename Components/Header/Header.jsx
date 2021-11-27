import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image 
          source={require ('../../assets/images/house.png')}
          style={styles.img}
      />
      <Text style={styles.title}>SmartHome</Text> 
    </View>

  )};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flexStart',
    padding: '10px',
  },
  title: {
    fontWeight: 'bold', 
    fontSize: '1.5rem', 
    color: '#2596be', 
    paddingHorizontal: '15px',
  },
  img: {
    width: 100,
    height: 100,
  },
});

export default Header;
