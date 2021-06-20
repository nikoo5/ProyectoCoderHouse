import React from "react";
import { Image, StyleSheet, TouchableOpacity} from "react-native";
import PLUS from "../assets/icons/plus.svg";

const FloatingPlusButton = (props) => {
  const extraStyles = [];
  if (props.right) {
    extraStyles.push({ right: props.right });
  }
  if (props.left) {
    extraStyles.push({ left: props.left });
  }
  if (props.top) {
    extraStyles.push({ top: props.top });
  }
  if (props.bottom) {
    extraStyles.push({ bottom: props.bottom });
  }
  return (
    <TouchableOpacity
      style={[styles.button, styles.shadow, extraStyles]}
      activeOpacity={0.7}
      onPress={props.onPress}
      delayPressIn={0}
    >
      <PLUS width="100%" height={36} fill="#FFFFFF" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#7B1FA2",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },
  icon: {
    width: 32,
    height: 32
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default FloatingPlusButton;
