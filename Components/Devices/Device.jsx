import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

/**usestate change green to red when the switch on and off red   */

const Device = (props) => {
  const [bgColor, setBgColor] = useState("green");
    
  return (
    <View style={styles.deviceContainer}>
      <View style={styles.leftWrapper}>
        <View style={{ width: 20, height: 20, backgroundColor: bgColor }}> </View>
        <View style={styles.lampTypeContainer}>
          <Text style={styles.lampTypeText}>{props.lampType}</Text>
        </View>
      </View>

      <View>
        <Button title="On" onPress={() => setBgColor("green")} />
        <Button title="Off" onPress={() => setBgColor("red")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deviceContainer: {
    display: "flex",
    width: "320px",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FDFF8F",
    padding: "10px",
    marginBottom: "10px"
  },
  leftWrapper: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  lampTypeText: {
    fontWeight: "600"
  },
  lampTypeContainer: {
    marginLeft: "10px"
  },
  switchBtnContainer: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
    alignItems: "center",
    height: "75px",
    backgroundColor: "f3f3f3"
  }
});

export default Device;
