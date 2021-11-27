import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Device from "./Device";

const Devices = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Devices</Text>
      <View>
        <Device lampType="Living Room Lamp" />
        <Device lampType="Heater" />
        <Device lampType="TV" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexFlow: 'column wrap',
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: '8px',
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#333",
    paddingBottom: "5px"
  }
});

export default Devices;
