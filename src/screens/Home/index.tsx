import React from 'react';
import { Header } from '../../components/Header';
import { ActivityIndicator, View,Text } from 'react-native';

import { ShopItem } from '../../components/ShopItem';
import { styles } from './styles';

export function Home(){
    
    <ActivityIndicator size='large'/>
    
    return(
        <>
        <Header />
        <View style={styles.container}>
            <ShopItem 
            image="https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02-840x560.jpg"
            name= "Pão Caseiro"
            stock= {30000}
            price= "1.00"
            />
            <ShopItem 
            image="https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02-840x560.jpg"
            name= "Pão Caseiro"
            stock= {30000}
            price= "1.00"
            />
            <ShopItem 
            image="https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02-840x560.jpg"
            name= "Pão Caseiro"
            stock= {30000}
            price= "1.00"
            />
            <ShopItem 
            image="https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02-840x560.jpg"
            name= "Pão Caseiro"
            stock= {30000}
            price= "1.00"
            />
        </View>

        </>
    )
}
