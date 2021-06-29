import React from 'react'
import { StyleSheet, View } from 'react-native';
import Styles from '../constants/Styles'

const Card = (props) => {
    return (
        <View style={{...styles.cardContainer, ...Styles.shadow, ...props.style}}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
  cardContainer: {    
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default Card;