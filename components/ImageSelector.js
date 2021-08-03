import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";

import { Alert, TouchableOpacity } from "react-native";

const ImageSelector = ({ onImage = () => {}, children, base64, ...props }) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de uso de la cámara para usar esta app",
        [{ text: "Ok" }]
      );
      return false;
    }

    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
      base64: true,
    });

    setPickedUri(image.uri);

    if (base64) {
      onImage(image.base64);
    } else {
      onImage(image.uri);
    }
  };

  return (
    <TouchableOpacity {...props} onPress={handlerTakeImage}>
      {children}
    </TouchableOpacity>
  );
};

export default ImageSelector;
