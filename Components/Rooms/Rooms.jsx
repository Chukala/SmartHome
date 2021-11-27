import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Room from "./Room";
/** I used array of objects to simplify my image path */
const img = [
  {
    path: require("../../assets/images/living-room.png"),
    title: "Living Room"
  },
  {
    path: require("../../assets/images/bed.png"),
    title: "BedRoom"
  },
  {
    path: require("../../assets/images/kitchen.png"),
    title: "kitchen"
  }
];

const Rooms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rooms</Text>
      <View style={{ display: "flex", flexFlow: "row wrap" }}>
        <Room imagePath={img[0].path} title={img[0].title} />
        <Room imagePath={img[1].path} title={img[1].title} />
        <Room imagePath={img[2].path} title={img[2].title} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "flexStart",
    justifyContent: "flexStart",
    paddingHorizontal: '10px',
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#333",
    paddingBottom:'5px'
  },
  
});

export default Rooms;
