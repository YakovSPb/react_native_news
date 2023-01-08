import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { gStyle } from '../styles/style';
import Form from './Form';
import { DEFAULT_ARTICLES } from '../constants/constants';

export interface IActicle {
  name: string
  anons: string
  full: string
  img: string
  key: string
}

export default function Main(props:any) {

  const [news, setNews] = useState(DEFAULT_ARTICLES)

  const [modalWindow, setModalWindow] = useState(false)

   const addArticle = (article: IActicle) => {
    article.key = Date()
    setNews((list: IActicle[])=> {
      return [article, ...list]
    })
    setModalWindow(false)
   }

    return (
      <View style={gStyle.main}>
        <Modal visible={modalWindow}>
        <View style={gStyle.main}>
        <Ionicons name="close-circle" size={34} color="red" style={styles.iconClose} onPress={()=> setModalWindow(false)} />
          <Text style={styles.title}>Форма добавления статьи</Text>
          <Form addArticle={addArticle}/>
        </View>
        </Modal>
        <Ionicons name="add-circle" size={34} color="green" style={styles.iconAdd} onPress={()=> setModalWindow(true)} />
        <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
        <FlatList data={news} renderItem={({item}) => (
          <TouchableOpacity  style={styles.item} onPress={()=> props.navigation.navigate('FullInfo', item)}>
            <Image style={styles.image} source={{uri: item.img}}/>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )} />
      </View>
    )
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  },
  image: {
    width: "100%",
    height: 200,
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15
  },
  iconClose: {
    textAlign: 'center',
  }
});
