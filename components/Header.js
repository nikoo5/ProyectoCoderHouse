import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    backgroundColor: "#7B1FA2",
    paddingHorizontal: 25,
    justifyContent: "center",
    borderTopColor: "#BA68C8",
    borderBottomColor: "#7B1FA2",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
});

export default Header;
