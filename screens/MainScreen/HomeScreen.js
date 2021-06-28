import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native';
import FloatingPlusButton from '../../components/FloatingPlusButton';
import ModalAdd from '../../components/homeScreen/ModalAdd';
import ModalDelete from '../../components/homeScreen/ModalDelete';
import Post from '../../components/homeScreen/Post';
import Colors from '../../constants/Colors';
import InfoIni, {author_coder} from '../../constants/InfoIni';

const HomeScreen = (props) => {
    const [modalAddVisible, setModalAddVisible] = useState(false);
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
    const [selectedPost, setSelectedPost] = useState({ author: { name: "" } });

    const [listPosts, setListPosts] = useState(InfoIni);

    const handleModalAdd = () => {
      setModalAddVisible(true);
    };
    const handleCancelAdd = () => {
      setModalAddVisible(false);
    };
    const handleConfirmAdd = (message) => {
      if (message.trim() != "") {
        let uuid = require("uuid");
        let newId = uuid.v4();

        setListPosts([
          {
            id: newId,
            author: author_coder,
            date: new Date(),
            message: message,
          },
          ...listPosts,
        ]);
      }
      setModalAddVisible(false);
    };

    const handleModalDelete = (post) => {
      setSelectedPost(post);
      setModalDeleteVisible(true);
    };

    const handleCancelDelete = () => {
      setModalDeleteVisible(false);
    };

    const handleConfirmDelete = (postId) => {
      setModalDeleteVisible(false);
      setListPosts(listPosts.filter((x) => x.id != postId));
    };

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
                image={data.item.author.image}
                author={data.item.author.name}
                date={data.item.date}
                message={data.item.message}
                onSelected={() => {
                  handleModalDelete(data.item);
                }}
              />
            );
          }}
        />
        <FloatingPlusButton right={20} bottom={80} onPress={handleModalAdd} />
      </>
    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.secondary.light,
  },
});

export default HomeScreen;