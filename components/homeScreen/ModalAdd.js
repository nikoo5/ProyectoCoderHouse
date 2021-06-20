import React from "react"
import { StyleSheet, View } from "react-native"
import ButtonPrimary from "../ButtonPrimary";
import CustomModal from "../CustomModal"

const ModalAdd = (props) => {
    return (
      <CustomModal visible={props.visible}>
        <View style={styles.mainContainer}>
          <View style={styles.buttonsContainer}>
            <ButtonPrimary text="CANCELAR" width={100} onPress={props.onCancel} />
            <ButtonPrimary text="ADD" width={100} onConfirm={props.onConfirm} />
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
  },
  buttonsContainer: {
    width:"100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
});

export default ModalAdd;