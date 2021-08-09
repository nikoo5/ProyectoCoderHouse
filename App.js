import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import AppNavigator from "./navigation";
import Colors from "./constants/Colors";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./store";
import { cleanDb, initDb } from "./db";

initDb()
  .then(() => {
    console.log("DataBase Initialized");
    // cleanDb().then(() => {
    //   console.log("DataBase Reseted");
    // });
    // fetchKnots().then((result) => {
    //   console.log(result);
    // });
  })
  .catch((err) => {
    console.log(err.message);
  });

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
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <View style={styles.app}>
        <SafeAreaView style={styles.safeArea}>
          <AppNavigator />
        </SafeAreaView>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: Colors.primary.main,
  },
  safeArea: {
    flex: 1,
  },
});
