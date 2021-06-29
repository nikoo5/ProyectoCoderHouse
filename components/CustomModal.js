import { BlurView } from "expo-blur";
import React from "react"
import { Modal, StyleSheet, View } from "react-native";

const CustomModal = (props) => {
    return (
      <Modal animationType="fade" visible={props.visible} transparent={true}>
        <BlurView
          tint="dark"
          intensity={100}
          style={[StyleSheet.absoluteFill, styles.modalContainer]}
        >
          <View style={[styles.cardContainer, styles.shadow]}>
            {props.children}
          </View>
        </BlurView>
      </Modal>
    );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
  },  
});

export default CustomModal;