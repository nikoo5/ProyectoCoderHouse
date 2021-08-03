import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";
import { InteractionManager } from "react-native-web";
import ButtonPrimary from "../../components/ButtonPrimary";
import { signup } from "../../store/actions/auth.actions";
import { useDispatch } from "react-redux";

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

const RegisterScreen = () => {
  const [error, setError] = useState("");
  const [registerText, setRegisterText] = useState("REGISTRARSE");
  const [registered, setRegistered] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      reemail: "",
      password: "",
      repassword: "",
      name: "",
      lastname: "",
    },
    inputValidities: {
      email: false,
      reemail: false,
      password: false,
      repassword: false,
      name: false,
      lastname: false,
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

  const handlerRegister = async () => {
    try {
      if (formState.formIsValid && registerText === "REGISTRARSE") {
        setRegisterText("REGISTRANDO");
        await dispatch(
          signup(
            formState.inputValues.email,
            formState.inputValues.password,
            formState.inputValues.name,
            formState.inputValues.lastname
          )
        );
      }
    } catch (err) {
      setError(err.message);
      setRegisterText("REGISTRARSE");
    }
  };

  useEffect(() => {
    if (error != "") {
      Alert.alert("ERROR!", error, [{ text: "Ok" }]);
      setError("");
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nuevo Usuario</Text>
      </View>

      <View style={styles.group}>
        <View>
          <Text style={styles.text}>E-Mail</Text>
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
        </View>
        <View>
          <Text style={styles.text}>Repetir E-Mail</Text>
          <Input
            id="reemail"
            text="Repetir E-Mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            required
            compareValue={formState.inputValues.email}
            errorMessage="Complete con el mismo E-Mail"
            onInputChange={handlerInputChange}
          />
        </View>
      </View>

      <View style={styles.group}>
        <View>
          <Text style={styles.text}>Contraseña</Text>
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
            errorMessage="Ingrese una cotraseña válida de al menos 6 caracteres"
            onInputChange={handlerInputChange}
          />
        </View>
        <View>
          <Text style={styles.text}>Repetir Contraseña</Text>
          <Input
            id="repassword"
            text="Repetir Contraseña"
            secureTextEntry
            keyboardType="default"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            required
            compareValue={formState.inputValues.password}
            errorMessage="Complete con la misma contraseña"
            onInputChange={handlerInputChange}
          />
        </View>
      </View>

      <View style={styles.group}>
        <View style={styles.horizontalContainer}>
          <View style={{ ...styles.subGroup, ...styles.marginRight }}>
            <Text style={styles.text}>Nombre</Text>
            <Input
              id="name"
              text="Nombre"
              keyboardType="default"
              autoCorrect={true}
              required
              minLength={3}
              errorMessage="Nombre inválido"
              onInputChange={handlerInputChange}
            />
          </View>
          <View style={{ ...styles.subGroup, ...styles.marginLeft }}>
            <Text style={styles.text}>Apellido</Text>
            <Input
              id="lastname"
              text="Apellido"
              keyboardType="default"
              autoCorrect={true}
              required
              minLength={3}
              errorMessage="Apellido inválido"
              onInputChange={handlerInputChange}
            />
          </View>
        </View>
      </View>

      <View>
        <ButtonPrimary text={registerText} onPress={handlerRegister} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontFamily: "comfortaa-bold",
    fontSize: 30,
  },
  group: {
    marginBottom: 20,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subGroup: {
    flex: 1,
  },
  marginRight: {
    marginRight: 5,
  },
  marginLeft: {
    marginLeft: 5,
  },
  text: {
    fontFamily: "comfortaa",
  },
});

export default RegisterScreen;
