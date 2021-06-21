import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Moment from 'moment';

const Post = (props) => {
  const [dateTime, setDateTime] = useState('');

  const dateConvert = (date) => {
    let dt = new Date();
    let dtPost = new Date(date);
    let seconds = (dt.getTime() - dtPost.getTime()) / 1000;

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

    return Moment(dt).format("DD/MM/yyyy");
  };  

  const messageCleaner = (msg) => {
    let tmp = msg;
    while (tmp.indexOf("\n\n") >= 0) {
      tmp = tmp.trim().replace("\n\n", "\n");
    }
    return tmp;
  };

  const handleSelectItem = (postId) => {
    props.onSelected(postId);
  }

  useEffect(() => {
    setDateTime(dateConvert(props.date));
    let timeoutHandle = setTimeout(() => {
      setDateTime(dateConvert(props.date));
    }, 20 * 1000);
  }, null) ;

  return (
    <TouchableOpacity
      style={styles.post}
      activeOpacity={0.9}
      delayPressIn={0}
      onLongPress={() => {handleSelectItem(props.id)}}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={[styles.dataContainer, styles.shadow]}>
        <View style={styles.infoContainer}>
          <Text style={styles.author}>{props.author}</Text>
          <Text style={styles.date}>{dateTime}</Text>
        </View>
        <Text>{messageCleaner(props.message)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    width: "100%",
    flexDirection: "row",
  },
  imageContainer: {
    justifyContent: "flex-start",
    alignItems: 'center',
    marginLeft: 10,
    marginVertical: 5
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  dataContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  author: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    fontSize: 10,
  },
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

export default Post;