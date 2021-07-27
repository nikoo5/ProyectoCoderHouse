import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ButtonPrimary from "../../components/ButtonPrimary";
import Card from "../../components/Card";
import CommentItem from "../../components/commentScreen/CommentItem";
import Post from "../../components/homeScreen/Post";
import { filterComments } from "../../store/actions/comments.actions";

const CommentScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.posts.selected)
  const comments =
    useSelector((state) => state.comments.filteredComments) || [];

  useEffect(() => {
    dispatch(filterComments(route.params.postId));
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
        <Post
          id={post.id}
          image={post.author.image}
          author={post.author.name}
          date={post.date}
          message={post.message}
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
    fontFamily: "comfortaa"
  }
});

export default CommentScreen;
