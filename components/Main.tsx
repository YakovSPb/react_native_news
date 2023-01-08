import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main(props:any) {

  const [news, setNews] = useState([
    {
      name: 'Google', anons: 'Google!!', full: 'Google is cool!', key: '1', img: 'https://itcrumbs.ru/wp-content/uploads/2020/08/gugl1.jpeg',
    },
    {
      name: 'Apple', anons: 'Apple!!', full: 'Apple is cool!', key: '2', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1e621668417605.5b5c14a93a935.jpg',
    },
    {
      name: 'FaceBook', anons: 'FaceBook!!', full: 'FaceBook is cool!', key: '3', img: 'https://www.likeni.ru/upload/iblock/8df/globe_facebook.jpg',
    },
  ])

    return (
      <View style={gStyle.main}>
        <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
        <FlatList data={news} renderItem={({item}) => (
          <TouchableOpacity  style={styles.item} onPress={()=> props.navigation.navigate('FullInfo', item)}>
             {/* @ts-ignore  */}
            <Image source={{
              width: "100%",
              height: 200,
              uri: item.img
            }}/>
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
  }
});
