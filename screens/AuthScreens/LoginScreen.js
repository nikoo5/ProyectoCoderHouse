import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Input from '../../components/Input';
import Styles from '../../constants/Styles'
const LoginScreen = () => {
    return (
    <View style={styles.screen}>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Knot It!</Text>
            </View>
            <View style={{...styles.formContainer, ...Styles.shadow }}>
                <Input text="Usuario" keyboardType="email-address" autoCapitalize={false} autoCompleteType="email" autoCorrect={false} />
                <Input text="Contraseña" secureTextEntry keyboardType="default" autoCapitalize={false} autoCompleteType="" autoCorrect={false} />
                
            </View>
        </View>        
    </View>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 100,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerContainer: {

    },
    header: {

    },
    formContainer: {
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        padding: 20,
        opacity: 0.8
    }
})

export default LoginScreen;