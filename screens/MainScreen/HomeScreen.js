import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FloatingPlusButton from "../../components/FloatingPlusButton";
import ModalAdd from "../../components/homeScreen/ModalAdd";
import ModalDelete from "../../components/homeScreen/ModalDelete";
import Post from "../../components/homeScreen/Post";
import { selectPost, addPost, deletePost } from "../../store/actions/posts.actions";

const HomeScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const listPosts = useSelector((state) => state.posts.list);
  const selectedPost = useSelector((state) => state.posts.selected) || {
    id: "",
    author: {
      name: ""
    }
  };

  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

  const handleSelectPost = (postId) => {
    dispatch(selectPost(postId));
  };

  const handleModalAdd = () => {
    setModalAddVisible(true);
  };
  const handleCancelAdd = () => {
    setModalAddVisible(false);
  };
  const handleConfirmAdd = (message) => {
    if (message.trim() != "") {
      dispatch(addPost(message.trim()));
    }
    setModalAddVisible(false);
  };

  const handleModalDelete = (post) => {
    dispatch(selectPost(post.id));
    setModalDeleteVisible(true);
  };

  const handleCancelDelete = () => {
    setModalDeleteVisible(false);
  };

  const handleConfirmDelete = (postId) => {
    dispatch(deletePost(postId));
    setModalDeleteVisible(false);
  };

  const handleCommentPress = (postId) => {
    navigation.navigate("CommentScreen", { postId: postId });
  }

  return (
    <>
      <ModalAdd
          visible={modalAddVisible}
          onCancel={handleCancelAdd}
          onConfirm={handleConfirmAdd}
        />

        <ModalDelete
          visible={modalDeleteVisible}
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
          postId={selectedPost.id}
          authorName={selectedPost.author.name}
        />

      <FlatList
          style={styles.mainContainer}
          data={listPosts}
          keyExtractor={(x) => x.id}
          renderItem={(data) => {
            return (
              <Post
                id={data.item.id}
                favorite={data.item.favorite}
                image={data.item.author.image}
                author={data.item.author.name}
                date={data.item.date}
                message={data.item.message}
                selectedId={selectedPost.id}
                onSelect={handleSelectPost}
                onSelected={() => {
                  handleModalDelete(data.item);
                }}
                onCommentPress={handleCommentPress}
              />
            );
          }}
        />
      <FloatingPlusButton right={20} bottom={20} onPress={handleModalAdd} />
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
  },
});

export default HomeScreen;
