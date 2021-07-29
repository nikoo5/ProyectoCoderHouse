import React from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const LogOutButton = (props) => {
  const handlerLogOut = () => {
    Alert.alert("Cerrar Sesión", "Estas seguro que deseas cerrar sesión?", [
      { text: "NO" },
      {
        text: "SI",
        onPress: () => {
          if (props.onLogOut != null) {
            props.onLogOut();
          }
        },
      },
    ]);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={handlerLogOut}
      delayPressIn={0}
    >
      <FontAwesome5 name="sign-out-alt" color="#FFFFFF" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginRight: 10,
  },
});

export default LogOutButton;
