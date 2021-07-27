import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../constants/Colors';

const Input = ({text, ...props}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={text} {...props} />            
            </View>
            <View>
                <Text style={styles.error}>Error Message</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    inputContainer: {
        borderBottomColor: Colors.primary.dark,
        borderBottomWidth: 2,
    },
    input: {
        color: Colors.primary.main
    },
    error: {
        color: Colors.red[900]
    }
})

export default Input;