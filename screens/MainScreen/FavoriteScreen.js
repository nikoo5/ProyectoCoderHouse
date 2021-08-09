import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Knot from "../../components/homeScreen/Knot";
import { getFavorites } from "../../store/actions/knots.actions";

const FavoriteScreen = (props) => {
  const dispatch = useDispatch();
  const favoriteKnots = useSelector((state) => state.knots.filteredKnots) || [];

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <FlatList
      style={styles.mainContainer}
      data={favoriteKnots}
      keyExtractor={(x) => x.id}
      renderItem={(data) => {
        return (
          <Knot
            id={data.item.id}
            favorite={data.item.favorite}
            image={data.item.author.profileImage}
            author={data.item.author.name + " " + data.item.author.lastName}
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
