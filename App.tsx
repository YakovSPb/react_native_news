import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { gStyle } from './styles/style';
import * as Font from 'expo-font'

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-VariableFont_wght.ttf')
})

export default function App() {

  const [font, setFont] = useState(false)

  if(font) {
    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Hello</Text>
      </View>
    )
  } else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={()=> {}}/>
    )
  }
}

const styles = StyleSheet.create({

});
