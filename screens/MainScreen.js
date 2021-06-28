import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import BottomBar from "../components/BottomBar"
import CustomStatusBar from "../components/CustomStatusBar"
import Header from "../components/Header"
import HomeScreen from "./MainScreen/HomeScreen";

const MainScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <CustomStatusBar />
      <Header title="Inicio" />
      <HomeScreen />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
  }
});

export default MainScreen;