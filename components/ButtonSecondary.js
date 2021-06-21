import React from 'react'
import { StyleSheet } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const ButtonSecondary = (props) => {
    return (
        <ButtonPrimary style={[styles.button, props.style]} onPress={props.onPress} text={props.text} width={props.width} />
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#616161",
  },
});

export default ButtonSecondary;