import React, { useCallback, useEffect, useReducer, useState } from "react";
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Input from "../../components/Input";
import Styles from "../../constants/Styles";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail } from "../../store/actions/auth.actions";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type == FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };

    const updatedValidities = {
      ...state.inputValidites,
      [action.input]: action.isValid,
    };

    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }

    return {
      formIsValid: updatedFormIsValid,
      inputValidites: updatedValidities,
      inputValues: updatedValues,
    };
  }

  return { ...state };
};

const LoginScreen = () => {
  const bgImage = require("../../assets/img/bg.png");
  const logoImage = require("../../assets/img/knot_logo.png");

  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const auth = useSelector((state) => state.auth);
  // console.log(auth);

  useEffect(() => {
    if (error) {
      Alert.alert("Ha ocurrido un error", error, [{ text: "Ok" }]);
    }
  }, [error]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handlerInputChange = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        input: inputIdentifier,
        value: inputValue,
        isValid: inputValidity,
      });
    },
    [dispatchFormState]
  );

  const handlerLogin = async () => {
    try {
      if (formState.formIsValid) {
        await dispatch(
          loginWithEmail(
            formState.inputValues.email,
            formState.inputValues.password
          )
        );
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handlerNotImplemented = async () => {
    Alert.alert(
      "Alerta!",
      "Función no implementada por el momento, ingresar con los siguientes datos:\r\n\r\nEMAIL: coder@house.com\r\nCLAVE: coder123",
      [{ text: "Ok" }]
    );
  };

  return (
    <ImageBackground style={styles.screen} source={bgImage} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={logoImage} style={styles.logoStyle} />
          <Text style={styles.header}>Knot It!</Text>
        </View>
        <View style={{ ...styles.formContainer, ...Styles.shadow }}>
          <Input
            id="email"
            text="E-Mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            required
            email
            errorMessage="Ingrese un E-Mail válido"
            onInputChange={handlerInputChange}
          />
          <Input
            id="password"
            text="Contraseña"
            secureTextEntry
            keyboardType="default"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            required
            minLength={6}
            errorMessage="Ingrese una cotraseña válida"
            onInputChange={handlerInputChange}
          />
          <ButtonPrimary text="INGRESAR" onPress={handlerLogin} />
          <View style={styles.buttonsContainer}>
            <TouchableWithoutFeedback onPress={handlerNotImplemented}>
              <View>
                <Text style={styles.textBold}>Registrarse</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handlerNotImplemented}>
              <View>
                <Text style={styles.text}>Olvide mi contraseña</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoStyle: {
    width: "60%",
    height: undefined,
    aspectRatio: 1221 / 846,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    fontFamily: "comfortaa-bold",
    color: "white",
  },
  formContainer: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    padding: 20,
    opacity: 0.8,
  },
  buttonsContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textBold: {
    fontFamily: "comfortaa-bold",
  },
  text: {
    fontFamily: "comfortaa-light",
  },
});

export default LoginScreen;
