import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ButtonPrimary from "../../components/ButtonPrimary";
import Card from "../../components/Card";
import CommentItem from "../../components/commentScreen/CommentItem";
import Knot from "../../components/homeScreen/Knot";
import { filterComments } from "../../store/actions/comments.actions";

const CommentScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const knot = useSelector((state) => state.knots.selected);
  const comments =
    useSelector((state) => state.comments.filteredComments) || [];

  useEffect(() => {
    dispatch(filterComments(route.params.knotId));
  }, []);

  const renderItem = ({ item }) => <CommentItem comment={item} />;

  const commentList = () => (
    <FlatList
      data={comments}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );

  const noComments = () => (
    <Card style={styles.noCommentsContainer}>
      <Text style={styles.text}>Sin comentarios</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View>
        <Knot
          id={knot.id}
          image={knot.author.profileImage}
          author={knot.author.name}
          date={knot.date}
          message={knot.message}
        />
      </View>
      <View style={styles.container}>
        {comments.length > 0 ? commentList() : noComments()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noCommentsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "comfortaa",
  },
});

export default CommentScreen;
