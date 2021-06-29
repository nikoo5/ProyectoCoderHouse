import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import BottomBar from "../components/BottomBar"
import CustomStatusBar from "../components/CustomStatusBar"
import Header from "../components/Header"
import Colors from "../constants/Colors"
import FavoriteScreen from "./MainScreen/FavoriteScreen"
import HomeScreen from "./MainScreen/HomeScreen";
import UserScreen from "./MainScreen/UserScreen"

const MainScreen = () => {
  const [currentScreen, setCurrentScreen] = useState('Inicio')

  const activeScreen = () => {
    switch (currentScreen) {
      case "Inicio":
        return <HomeScreen />;
      case "Usuario":
        return <UserScreen />;
      case "Favoritos":
        return <FavoriteScreen />;
    }
  }

  return (
    <View style={styles.screenContainer}>
      <CustomStatusBar />
      <Header title={currentScreen} />
      <View style={styles.screens}>{activeScreen()}</View>
      <BottomBar
        onFavPress={() => setCurrentScreen("Favoritos")}
        onHomePress={() => setCurrentScreen("Inicio")}
        onUserPress={() => setCurrentScreen("Usuario")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column"
  },
  screens: {
    flex: 1,
    backgroundColor: Colors.secondary.light
  }
});

export default MainScreen;