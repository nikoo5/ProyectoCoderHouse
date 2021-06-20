import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const CustomStatusBar = () => {
  return <View style={styles.statusBar}></View>;
};

const styles = StyleSheet.create({
  statusBar: {
    width: "100%",
    height: StatusBar.currentHeight,
    backgroundColor: "#6A1B9A",
  },
});

export default CustomStatusBar;
