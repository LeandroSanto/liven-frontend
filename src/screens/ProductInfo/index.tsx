import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { Button } from '../../components/Button/Index';

interface ProductInfoProps{
  productListItem:{
    image: string,
    name: string,
    stock: number,
    price: string
  }
}

export const ProductInfo: React.FunctionComponent<ProductInfoProps> = ({productListItem}) => {
  return(
    <View>
      <Image 
        source={{uri:'https://imagens.mdig.com.br/thbs/45184mn.jpg'}} 
      />
      
      <View>
        <Text>{productListItem.name}</Text>
        <Text>{productListItem.stock}</Text>
        <Text>{productListItem.price}</Text>
        <TouchableOpacity></TouchableOpacity>
        <Button name="Adicionar ao Carrinho"/>
      </View>
    </View>
  )
}