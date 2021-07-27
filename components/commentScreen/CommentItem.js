import React from "react";
import { StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import Card from "../Card";

const CommentItem = (props) => {
  return (
    <>
      <Card>
        <Text style={styles.userName}>{props.comment.author.name}</Text>
        <Text style={styles.message}>{props.comment.message}</Text>
      </Card>
    </>
  );
};



const styles = StyleSheet.create({
  userName: {
    fontFamily: "comfortaa-bold",
  },
  message: {
      fontFamily: "comfortaa"
  }
});

export default CommentItem;
