import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ActivityIndicator, View,Text, FlatList, SafeAreaView, Alert } from 'react-native';

import { api } from '../../services/api';

import { ShopItem } from '../../components/ShopItem';
import { styles } from './styles';

export function Home(){
  <ActivityIndicator size='large'/>
  const [ productList, setProductList ] = useState([]);
  
  useEffect(() => {
      async function loadData() {
          const response = await api.get('/product')
              .then ((response) => setProductList(response.data))
          
      }
    loadData()
  }),[]

  
  return(
    <View style={styles.container}>
        <Header /> 
        <FlatList
          data={productList}
          keyExtractor={ item => String(item.id)}
          renderItem={ ({ item }) => <ShopItem productlist={ item }/>}
        />
    </View>


  )
}
