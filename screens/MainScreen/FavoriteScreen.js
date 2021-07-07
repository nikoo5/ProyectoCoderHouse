import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native';
import Post from '../../components/homeScreen/Post';
import InfoIni from '../../data/posts';

const FavoriteScreen = (props) => {
    const [listPosts, setListPosts] = useState(InfoIni.filter(x => x.favorite));

    return (
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
            />
          );
        }}
      />
    );
}

const styles = StyleSheet.create({

})

export default FavoriteScreen;