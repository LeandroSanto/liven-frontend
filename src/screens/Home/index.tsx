import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ActivityIndicator, View, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { InputField } from '../../components/InputField/Index';

import { api } from '../../services/api';

import { ShopItem } from '../../components/ShopItem';
import { styles } from './styles';
import { COLORS } from '../../assets/theme';


export function Home(){
  <ActivityIndicator size='large'/>

  const [ productList, setProductList ] = useState([]);
  const [ resultList, setResultList ] = useState(productList);
  const [ searchText, setSearchText ] = useState('');
 
  useEffect(() => {
      async function loadData() {
          const response = await api.get('/product')
              .then ((response) => setProductList(response.data))    
      }
    loadData()
  }),[]

  useEffect(()=>{
    if (searchText === ''){
      setResultList(productList)
    }else{
      setResultList(
        productList.filter(
          (item) => 
          item.name.toLowercase().indexOf(searchText.toLowerCase()) > -1 
          )
      )
    }
  }),[searchText]

  return(
    <View style={styles.container}>
      <Header /> 
        
        <View style={styles.searchInput}>
          <MCIcon name="magnify" size={30} color={COLORS.ICONS_BLACK_COLOR}  style={styles.icon}/>
          <InputField label='Busca' />
        </View>

      <View style={styles.listContainer}>    
        <FlatList
          style={styles.listItem}
          data={resultList}
          keyExtractor={ item => String(item.id)}
          renderItem={ ({ item }) => <ShopItem productlist={ item }/>}
          numColumns={2}
        />

      </View>
    </View>

  )
}
