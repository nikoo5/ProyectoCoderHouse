import { Platform, StyleSheet } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
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

export const HeaderStyle = {
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? Colors.primary.dark : "",
    },
    headerTitleStyle: {
      fontFamily: "comfortaa",
    },
    headerTintColor:
      Platform.OS === "android" ? "white" : Colors.primary.dark,
}

export const BootomBarStyle = {
  activeTintColor: "white",
  inactiveTintColor: "white",
  tabStyle: {
    backgroundColor: Colors.primary.dark,
  },
  labelStyle: {
    fontFamily: "comfortaa",
  }
}