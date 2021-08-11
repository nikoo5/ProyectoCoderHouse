import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Moment from "moment";
import Styles from "../../constants/Styles";
import Card from "../Card";
import Colors from "../../constants/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/actions/knots.actions";
import MapView, { Marker } from "react-native-maps";

const Knot = (props) => {
  const dispatch = useDispatch();

  const dateConvert = (date) => {
    let dt = new Date();
    let dtKnot = new Date(date);
    let seconds = (dt.getTime() - dtKnot.getTime()) / 1000;

    if (seconds < 5) {
      return "Ahora";
    } else if (seconds < 60) {
      return `Hace ${Math.floor(seconds).toString()} segundos`;
    } else if (seconds < 60 * 60) {
      if (seconds < 60 * 2) {
        return "Hace un minuto";
      }
      return `Hace ${Math.floor(seconds / 60).toString()} minutos`;
    } else if (seconds < 60 * 60 * 24) {
      if (seconds < 60 * 60 * 2) {
        return "Hace una hora";
      }
      return `Hace ${Math.floor(seconds / (60 * 60)).toString()} horas`;
    }

    return Moment(dtKnot).format("DD/MM/yyyy");
  };

  const messageCleaner = (msg) => {
    let tmp = msg;
    while (tmp.indexOf("\n\n") >= 0) {
      tmp = tmp.trim().replace("\n\n", "\n");
    }
    return tmp;
  };

  const handleSelectItem = () => {
    if (props.onSelected) {
      props.onSelected(props.id);
    }
  };

  const handleActionButtons = () => {
    if (props.onSelect) {
      if (props.selectedId === props.id) {
        props.onSelect("");
      } else {
        props.onSelect(props.id);
      }
    }
  };

  const handleFavorite = () => {
    dispatch(toggleFavorite(props.id));
  };

  const handleComment = () => {
    props.onCommentPress(props.id);
  };

  const image = () => {
    if (props.image !== null && props.image !== "") {
      if (props.image.startsWith("http")) {
        return { uri: props.image };
      }
      return { uri: `data:image/jpg;base64,${props.image}` };
    } else {
      return require("../../assets/img/noUserImg.png");
    }
  };

  const mapView = () => {
    if (
      (props.id === props.selectedId ||
        (props.showMap !== null && props.showMap)) &&
      props.location !== undefined &&
      props.location !== null
    ) {
      const region = {
        ...props.location,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      };
      return (
        <View style={styles.map}>
          <MapView initialRegion={region} style={{ flex: 1 }}>
            <Marker coordinate={region} />
          </MapView>
        </View>
      );
    }

    return null;
  };

  const actionButton = () => {
    if (props.id === props.selectedId)
      return (
        <View style={styles.actionsContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={handleFavorite}>
            <FontAwesome5
              name="heart"
              size={20}
              color={props.favorite ? Colors.red[900] : Colors.secondary.main}
              solid={props.favorite}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={handleComment}>
            <FontAwesome5
              name="comment"
              size={20}
              color={Colors.secondary.main}
              regular={true}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={handleSelectItem}>
            <FontAwesome5
              name="trash-alt"
              size={20}
              color={Colors.red[900]}
              regular={true}
            />
          </TouchableOpacity>
        </View>
      );
  };

  return (
    <TouchableOpacity
      style={styles.knot}
      activeOpacity={1}
      delayPressIn={0}
      onPress={handleActionButtons}
    >
      <Card style={styles.image}>
        <Image style={styles.image} source={image()} />
      </Card>
      <View style={styles.container}>
        <Card style={styles.card}>
          <View style={styles.infoContainer}>
            <Text style={styles.author}>{props.author}</Text>
            <Text style={styles.date}>{dateConvert(props.date)}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text>{messageCleaner(props.message)}</Text>
          </View>
          {mapView()}
          {actionButton()}
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  knot: {
    width: "100%",
    flexDirection: "row",
  },
  container: {
    width: "100%",
    paddingRight: 80,
  },
  card: {
    width: "100%",
  },
  image: {
    padding: 0,
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionsContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  author: {
    fontFamily: "comfortaa-bold",
    fontSize: 16,
  },
  date: {
    fontFamily: "comfortaa-light",
    fontSize: 10,
  },
  message: {
    fontFamily: "comfortaa",
  },
  map: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Knot;
