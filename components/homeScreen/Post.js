import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Moment from 'moment';

const Post = (props) => {
    return (
      <TouchableOpacity style={styles.post} activeOpacity={0.9} delayPressIn={0}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: props.image }}
          />
        </View>
        <View style={[styles.dataContainer, styles.shadow]}>
          <View style={styles.infoContainer}>
            <Text style={styles.author}>{props.author}</Text>
            <Text style={styles.date}>
              {Moment(props.date).format("DD/MM/yyyy")}
            </Text>
          </View>
          <Text>{props.message}</Text>
        </View>
      </TouchableOpacity>
    );
}

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