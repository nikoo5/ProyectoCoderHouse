import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import CustomModal from "../CustomModal";

const ModalDelete = (props) => {
  return (
    <CustomModal visible={props.visible}>
      <View style={styles.mainContainer}>
        <Text style={styles.text}>
          Estas seguro que deseas eliminar el nudo de "{props.authorName}"?
        </Text>
        <View style={styles.buttonsContainer}>
          <ButtonSecondary
            text="CANCELAR"
            width={120}
            onPress={props.onCancel}
          />
          <ButtonPrimary
            text="CONFIRMAR"
            width={120}
            onPress={() => props.onConfirm(props.knotId)}
          />
        </View>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    marginBottom: 10,
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

export default ModalDelete;
