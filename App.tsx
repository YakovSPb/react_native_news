import React, { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import {NativeRouter, Route} from 'react-router-native'

import MainStack from './navigate';
import FullInfo from './components/FullInfo';

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-VariableFont_wght.ttf')
})

export default function App() {

  const [font, setFont] = useState(false)

  if(font) {
    return (
      <MainStack/>
    )
  } else {
    return (
      <AppLoading
       startAsync={fonts} 
       onFinish={() => setFont(true)} 
       onError={console.warn}/>
    )
  }
}


const styles = StyleSheet.create({

});
