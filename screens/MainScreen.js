import React, { useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import BottomBar from "../components/BottomBar"
import CustomStatusBar from "../components/CustomStatusBar"
import FloatingPlusButton from "../components/FloatingPlusButton";
import Header from "../components/Header"
import ModalAdd from "../components/homeScreen/ModalAdd";
import Post from "../components/homeScreen/Post";

//Información de Prueba
const author_me = {
  id: "52ab16cc-89af-403c-bbfd-3a68b4fd32ce",
  name: "Nicolás Filippi Farmar",
  image:
    "https://firebasestorage.googleapis.com/v0/b/homie-b5662.appspot.com/o/profile_pictures%2FeqgfQsrUqtTo8AaTS3nkS3Ca5G73%2FuHkw7gSphQlI.jpg?alt=media&token=d80d3722-5034-4e1b-ab25-7f2069da3b88",
};

const author_coder = {
  id: "abf83175-2442-4023-bcf7-3266ff2cfd36",
  name: "Equipo CoderHouse",
  image:
    "https://avatars.slack-edge.com/2020-08-23/1303062387175_56cab3e013f7f4991252_88.png",
};

const initialPosts = [
  {
    author: author_me,
    date: "2021-06-20T09:17:55.682Z",
    id: "009c3373-be69-4118-b8a2-a4ba78adfcac",
    message: "Hola Coder!",
  },
  {
    author: author_me,
    date: "2021-06-20T09:18:13.149Z",
    id: "7e069544-a76a-467c-8f1c-e828d9c3a1ff",
    message: "Esta es mi aplicación para el primer desafío!",
  },
  {
    author: author_coder,
    date: "2021-06-20T09:18:49.648Z",
    id: "4100085b-3a17-4a2d-a73a-a27fce2c847a",
    message:
      'Haciendo tap en el botón del "+", podrán agregar un nuevo posteo a la lista...',
  },
  {
    author: author_me,
    date: "2021-06-20T09:21:53.250Z",
    id: "7bdaba7a-f7b7-437f-990d-96131019db13",
    message:
      "Para eliminar cualquiera de los posteos, solo se requiere mantener presionado un posteo y así acceder al cartel de confirmación de eliminación!",
  },
  {
    author: author_coder,
    date: "2021-06-20T09:35:50.723Z",
    id: "abf83175-2442-4023-bcf7-3266ff2cfd36",
    message: "Saludos!!!",
  },
];

const MainScreen = () => {
  const [modalAddVisible, setModalAddVisible] = useState(false)
  const [listItems, setListItems] = useState(initialPosts);
  
  const handleModalAdd = () => {
    setModalAddVisible(true);
  }
  const handleCancelAdd = () => {
    setModalAddVisible(false);
  }
  const handleConfirmAdd = (message) => {
    if(message.trim() != "") {
      let uuid = require("uuid")
      let newId = uuid.v4();

      setListItems([{id: newId, author: author_coder, date: (new Date()), message: message}, ...listItems])
    }
    setModalAddVisible(false);
  }

  return (
    <View style={styles.screenContainer}>
      <ModalAdd
        visible={modalAddVisible}
        onCancel={handleCancelAdd}
        onConfirm={handleConfirmAdd}
      />

      <CustomStatusBar />
      <Header title="Inicio" />
      <FlatList style={styles.mainContainer}
        data={listItems}
        keyExtractor={x => x.id}
        renderItem={data => {
          return (
            <Post
              image={data.item.author.image}
              author={data.item.author.name}
              date={data.item.date}
              message={data.item.message}
            />
          );
        }}
      />
      <FloatingPlusButton right={20} bottom={80} onPress={handleModalAdd} />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E0E0E0",
  },
});

export default MainScreen;