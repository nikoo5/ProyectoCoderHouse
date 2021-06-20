import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const ButtonPrimary = (props) => {
    const extraStyles = [];

    if(props.width) {
        extraStyles.push({width: props.width})
    }

    return (
        <TouchableOpacity style={[styles.button, extraStyles]} onPress={props.onPress}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#7B1FA2",
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default ButtonPrimary;