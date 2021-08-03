import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "../../components/Card";
import { author_coder } from "../../data/posts";
import Styles from "../../constants/Styles";
import Colors from "../../constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useSelector, useDispatch } from "react-redux";
import ImageSelector from "../../components/ImageSelector";
import { setUserImage } from "../../store/actions/user.actions";

const UserScreen = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const [error, setError] = useState("");
  const [image, setImage] = useState(require("../../assets/img/noUserImg.png"));

  const handleChangePicture = async (uri) => {
    try {
      await dispatch(setUserImage(auth, uri));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (user.profileImage !== null && user.profileImage !== "") {
      setImage({ uri: `data:image/jpg;base64,${user.profileImage}` });
    }
    if (error !== "") {
      Alert.alert("Error!", error, [{ text: "OK" }]);
      setError("");
    }
  }, [user, error]);

  return (
    <View style={styles.screenContainer}>
      <View style={{ ...styles.profileImage, ...Styles.shadow }}>
        <Image source={image} style={styles.profileImage} />
        <ImageSelector
          activeOpacity={0.9}
          style={{ ...styles.editButton, ...Styles.shadow }}
          onImage={handleChangePicture}
          base64={true}
        >
          <FontAwesome5 name="camera" color="#000000" size={20} />
        </ImageSelector>
      </View>
      <Card style={styles.cardContainer}>
        <Text style={styles.name}>
          {user.name} {user.lastName}
        </Text>
      </Card>
    </View>
  );
};

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
    backgroundColor: "white",
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
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 18,
    bottom: 18,
  },
});

export default UserScreen;
