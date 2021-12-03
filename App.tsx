import React from 'react';
import { useFonts,Roboto_400Regular,Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home';
import { BottonMenu } from './src/components/BottonMenu';
import { styles } from './src/assets/global/styles';
import { View } from 'react-native';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Home />
      <BottonMenu />
    </View>
  );
}