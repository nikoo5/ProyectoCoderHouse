import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: "100%",
    backgroundColor: Colors.primary.dark,
    paddingHorizontal: 25,
    justifyContent: "center",
    borderTopColor: Colors.primary.light,
    borderBottomColor: Colors.primary.main,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  headerText: {
    color: "#FFFFFF",
    fontFamily: "comfortaa",
    fontSize: 22,
  },
});

export default Header;
