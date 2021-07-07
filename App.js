import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import AppLoading from "expo-app-loading";
import MainScreen from './screens/MainScreen';
import Colors from './constants/Colors';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded, _] = useFonts({
    raleway: require("./assets/fonts/Raleway/Raleway-Regular.ttf"),
    "raleway-bold": require("./assets/fonts/Raleway/Raleway-Bold.ttf"),
    "raleway-light": require("./assets/fonts/Raleway/Raleway-Light.ttf"),

    comfortaa: require("./assets/fonts/Comfortaa/Comfortaa-Regular.ttf"),
    "comfortaa-bold": require("./assets/fonts/Comfortaa/Comfortaa-Bold.ttf"),
    "comfortaa-light": require("./assets/fonts/Comfortaa/Comfortaa-Light.ttf"),
  });

  if (!loaded) {
    return (
      <AppLoading />
    );
  }

  return (
    <View style={styles.app}>
      <SafeAreaView style={styles.safeArea}>
        <MainScreen />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: Colors.primary.main
  },
  safeArea: {
    flex: 1,
  },
});