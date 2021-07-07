import React from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Card from '../../components/Card';
import { author_coder } from '../../data/posts';
import Styles from "../../constants/Styles";
import Colors from '../../constants/Colors';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const UserScreen = (props) => {
  const handleChangePicture = () => {
    Alert.alert(
      "No implementado",
      "Característica de cambio de imagen para implementar en un futuro",
      [{ text: "OK" }]
    );
  }

    return (
      <View style={styles.screenContainer}>
        <View style={{ ...styles.profileImage, ...Styles.shadow }}>
          <Image
            source={{ uri: author_coder.image }}
            style={styles.profileImage}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            style={{ ...styles.editButton, ...Styles.shadow }}
            onPress={handleChangePicture}
          >
            <FontAwesome5 name="camera" color="#000000" size={20} />
          </TouchableOpacity>
        </View>
        <Card style={styles.cardContainer}>
          <Text style={styles.name}>{author_coder.name}</Text>
        </Card>
      </View>
    );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 250,
    backgroundColor: "white"
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  name: {
    fontFamily: "comfortaa-bold",
    fontSize: 18,
  },
  editButton: {
    backgroundColor: Colors.secondary.light,
    width: 48,
    height: 48,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    right: 18,
    bottom: 18

  },
});

export default UserScreen;