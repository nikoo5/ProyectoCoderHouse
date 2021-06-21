import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const ButtonPrimary = (props) => {
    const extraStyles = [];

    if(props.width) {
        extraStyles.push({width: props.width})
    }

    return (
      <TouchableOpacity
        style={[styles.button, styles.shadow, extraStyles, props.style]}
        onPress={props.onPress}
        delayPressIn={0}
        activeOpacity={0.7}
      >
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#7B1FA2",
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
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
  },
});

export default ButtonPrimary;