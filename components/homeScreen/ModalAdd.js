import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import CustomModal from "../CustomModal";
import Colors from "../../constants/Colors";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import AppLoading from "expo-app-loading";
import Style from "../../constants/Styles";

const ModalAdd = ({ onCancel = () => {}, ...props }) => {
  const [message, setMessage] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const [latLng, setLatLng] = useState({
    latitude: -35.595919066162764,
    longitude: -58.4523943439126,
    latitudeDelta: 0.001,
    longitudeDelta: 0.01,
  });

  const clearStates = () => {
    setMessage("");
    setAccessGranted(false);
    setMapVisible(false);
    setIsFetching(false);
  };

  const handleCancel = () => {
    clearStates();
    onCancel();
  };

  const handleConfirm = (message) => {
    props.onConfirm({
      message: message,
      location: mapVisible
        ? { latitude: latLng.latitude, longitude: latLng.longitude }
        : null,
    });
    clearStates();
  };

  const handlerAddLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Error!",
        "Para poder utilizar el mapa, debe permitir la localización",
        [{ text: "Ok" }]
      );
      setAccessGranted(false);
    } else {
      setAccessGranted(true);
      getLocation();
    }
  };

  const getLocation = async () => {
    setIsFetching(true);
    try {
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });

      setLatLng({
        ...latLng,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      setMapVisible(true);
    } catch (err) {
      Alert.alert("Error!", "No se pudo obtener la ubicación.", [
        { text: "Ok" },
      ]);
    } finally {
      setIsFetching(false);
    }
  };

  const handlePress = (event) => {
    console.log(event.nativeEvent);
  };

  const mapRender = () => {
    if (mapVisible) {
      return (
        <View style={[styles.map, Style.shadow]}>
          <MapView
            initialRegion={latLng}
            style={{ flex: 1 }}
            onPress={handlePress}
          >
            <Marker coordinate={latLng}>
              <View>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../../assets/img/map-blue-dot.png")}
                ></Image>
              </View>
            </Marker>
          </MapView>
        </View>
      );
    }

    return null;
  };

  const buttonAddLocation = () => {
    if (isFetching) {
      return <ActivityIndicator size="large" color={Colors.primary.dark} />;
    }

    if (!mapVisible && !isFetching) {
      return (
        <TouchableOpacity onPress={handlerAddLocation}>
          <View style={styles.locationButton}>
            <FontAwesome5
              name="map-marker-alt"
              color={Colors.primary.dark}
              size={20}
            />
            <Text style={styles.locationText}>Agregar</Text>
            <Text style={styles.locationText}>Ubicación</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return null;
  };

  return (
    <CustomModal visible={props.visible}>
      <View style={styles.mainContainer}>
        <TextInput
          style={[styles.input, Style.shadow]}
          multiline={true}
          maxLength={200}
          placeholder="Escribe tu mensaje..."
          onChangeText={setMessage}
          value={message}
        />
        {mapRender()}
        <View style={styles.buttonsContainer}>
          <ButtonSecondary text="CANCELAR" width={110} onPress={handleCancel} />
          {buttonAddLocation()}
          <ButtonPrimary
            text="ENVIAR"
            width={110}
            onPress={() => handleConfirm(message)}
          />
        </View>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  input: {
    width: "100%",
    height: 120,
    marginBottom: 10,
    padding: 10,
    textAlign: "left",
    textAlignVertical: "top",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    fontFamily: "comfortaa",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  locationText: {
    color: Colors.primary.dark,
    fontFamily: "comfortaa",
    fontSize: 12,
  },
  map: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default ModalAdd;
