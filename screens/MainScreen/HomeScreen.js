import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FloatingPlusButton from "../../components/FloatingPlusButton";
import ModalAdd from "../../components/homeScreen/ModalAdd";
import ModalDelete from "../../components/homeScreen/ModalDelete";
import Knot from "../../components/homeScreen/Knot";
import {
  selectKnot,
  deleteKnot,
  addKnot,
  loadKnots,
} from "../../store/actions/knots.actions";

const HomeScreen = ({ navigation, route }) => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const listKnots = useSelector((state) => state.knots.list);
  const selectedKnots = useSelector((state) => state.knots.selected) || {
    id: "",
    author: {
      name: "",
    },
  };

  // console.log(listKnots);

  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

  const handleSelectKnot = (knotId) => {
    dispatch(selectKnot(knotId));
  };

  const handleModalAdd = () => {
    setModalAddVisible(true);
  };
  const handleCancelAdd = () => {
    setModalAddVisible(false);
  };
  const handleConfirmAdd = (data) => {
    if (data.message.trim() != "") {
      dispatch(addKnot(auth, user, data.message, data.location));
    }
    setModalAddVisible(false);
  };

  const handleModalDelete = (knot) => {
    dispatch(selectKnot(knot.id));
    setModalDeleteVisible(true);
  };

  const handleCancelDelete = () => {
    setModalDeleteVisible(false);
  };

  const handleConfirmDelete = (knotId) => {
    dispatch(deleteKnot(auth, knotId));
    setModalDeleteVisible(false);
  };

  const handleCommentPress = (knotId) => {
    navigation.navigate("CommentScreen", { knotId: knotId });
  };

  // useEffect(() => {
  //   dispatch(loadKnots(auth));
  // }, []);

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
        knotId={selectedKnots.id}
        authorName={selectedKnots.author.name}
      />

      <FlatList
        style={styles.mainContainer}
        data={listKnots}
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
              location={data.item.location}
              selectedId={selectedKnots.id}
              onSelect={handleSelectKnot}
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
