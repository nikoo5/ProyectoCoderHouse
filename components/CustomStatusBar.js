import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

const CustomStatusBar = () => {
  return <View style={styles.statusBar}></View>;
};

const styles = StyleSheet.create({
  statusBar: {
    width: "100%",
    height: StatusBar.currentHeight,
    backgroundColor: Colors.primary.main,
  },
});

export default CustomStatusBar;
