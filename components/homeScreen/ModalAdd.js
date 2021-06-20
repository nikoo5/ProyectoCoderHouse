import React, { useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import ButtonPrimary from "../ButtonPrimary";
import CustomModal from "../CustomModal"

const ModalAdd = (props) => {
  const [message, setMessage] = useState('')

  const handleConfirm = (message) => {
    setMessage("");
    props.onConfirm(message);
  }

    return (
      <CustomModal visible={props.visible}>
        <View style={styles.mainContainer}>
          <TextInput
            style={[styles.input, styles.shadow]}
            multiline={true}
            maxLength={200}
            placeholder="Escribe tu mensaje..."
            onChangeText={setMessage}
            value={message}
          />
          <View style={styles.buttonsContainer}>
            <ButtonPrimary
              text="CANCELAR"
              width={100}
              onPress={props.onCancel}
            />
            <ButtonPrimary
              text="ENVIAR"
              width={100}
              onPress={() => handleConfirm(message)}
            />
          </View>
        </View>
      </CustomModal>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  input: {
    width: "100%",
    height: 110,
    marginBottom: 10,
    padding: 10,
    textAlign: "left",
    textAlignVertical: "top",
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
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

export default ModalAdd;