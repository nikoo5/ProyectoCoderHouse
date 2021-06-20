import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import HEART from "../assets/icons/heart.svg";
import HOME from "../assets/icons/home.svg"
import USER from "../assets/icons/user.svg";

const BottomBar = (props) => {
  return (
    <View style={styles.bottomBar}>
      {/* <TouchableOpacity style={styles.button} activeOpacity={0.7} delayPressIn={0}>
        <HEART width="100%" height={36} fill="#FFFFFF" />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        delayPressIn={0}
      >
        <HOME width="100%" height={36} fill="#FFFFFF" />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} activeOpacity={0.7} delayPressIn={0}>
        <USER width="100%" height={36} fill="#FFFFFF" />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#7B1FA2",
  },
  button: {
    flex: 1
  }
});

export default BottomBar;
