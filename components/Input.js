import React, { useEffect, useReducer } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../constants/Colors";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return { ...state, value: action.value, isValid: action.isValid };
    case INPUT_BLUR:
      return { ...state, touched: true };
    default:
      return { ...state };
  }
};

const Input = ({
  text,
  errorMessage,
  initialValue,
  initialValid,
  ...props
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isValid: initialValid || false,
    touched: false,
  });

  const { onInputChange = () => {}, id } = props;

  useEffect(() => {
    onInputChange(id, inputState.value, inputState.isValid);
  }, [inputState, onInputChange, id]);

  const handlerTextChange = (text) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let isValid = true;
    if (props.required && text.trim().length === 0) isValid = false;
    if (props.email && !emailRegex.test(text.toLowerCase())) isValid = false;
    if (props.min != null && +text < props.min) isValid = false;
    if (props.max != null && +text > props.max) isValid = false;
    if (props.compareValue != null && props.compareValue !== text)
      isValid = false;
    if (props.minLength != null && text.length < props.minLength)
      isValid = false;

    dispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid,
    });
  };

  const handlerBlur = () => dispatch({ type: INPUT_BLUR });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={text}
          onChangeText={handlerTextChange}
          onBlur={handlerBlur}
          {...props}
        />
      </View>
      {errorMessage != "" && !inputState.isValid && inputState.touched ? (
        <View>
          <Text style={styles.error}>{errorMessage}</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  inputContainer: {
    borderBottomColor: Colors.primary.dark,
    borderBottomWidth: 2,
  },
  input: {
    color: Colors.primary.main,
    fontFamily: "comfortaa",
  },
  error: {
    color: Colors.red[900],
    fontFamily: "comfortaa",
  },
});

export default Input;
