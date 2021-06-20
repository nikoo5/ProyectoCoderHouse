import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import BottomBar from "../components/BottomBar"
import CustomStatusBar from "../components/CustomStatusBar"
import FloatingPlusButton from "../components/FloatingPlusButton";
import Header from "../components/Header"
import ModalAdd from "../components/homeScreen/ModalAdd";

const MainScreen = () => {
  const [modalAddVisible, setModalAddVisible] = useState(false)
  
  const handleModalAdd = () => {
    setModalAddVisible(true);
  }
  const handleCancelAdd = () => {
    setModalAddVisible(false);
  }
  const handleConfirmAdd = (item) => {
    setModalAddVisible(false);
  }

  return (
    <View style={styles.screenContainer}>
      <ModalAdd visible={modalAddVisible} onCancel={handleCancelAdd} />

      <CustomStatusBar />
      <Header title="Inicio" />
      <View style={styles.mainContainer}></View>
      <FloatingPlusButton right={20} bottom={80} onPress={handleModalAdd} onConfirm={handleConfirmAdd} />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E0E0E0",
  },
  buttonIcon: {
    height: 36,
    width: 36,
  },
});

export default MainScreen;