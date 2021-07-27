import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/homeScreen/Post";
import { getFavorites } from "../../store/actions/posts.actions";

const FavoriteScreen = (props) => {
  const dispatch = useDispatch();
  const favoritePosts = useSelector((state) => state.posts.filteredPosts) || [];

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <FlatList
      style={styles.mainContainer}
      data={favoritePosts}
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
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default FavoriteScreen;
