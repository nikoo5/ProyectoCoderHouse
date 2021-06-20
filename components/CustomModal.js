import React from "react"
import { Modal, StyleSheet, View } from "react-native";

const CustomModal = (props) => {
    return (
      <Modal animationType="fade" visible={props.visible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={[styles.cardContainer, styles.shadow]}>
            {props.children}
          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#000000AA",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10
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

export default CustomModal;