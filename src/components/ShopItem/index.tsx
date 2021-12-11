import React from 'react';
import { View,Text, Image } from 'react-native';

import { styles } from './styles';

interface ShopItemProps {
	productlist:{
		image: string,
		name: string,
		stock: number,
		price: string,
	}
}

export const ShopItem:React.FunctionComponent<ShopItemProps> = ({ productlist }) =>{
	return(
		<View style={styles.container}>
			<Image source={{uri:`${productlist.image}`}} style={styles.imageBox}/>
			<View style={styles.itemDescript}>
				<Text>{productlist.name}</Text>
				<Text style={styles.itemStock}>Em Estoque: {productlist.stock}</Text>
			</View>
			<View style={styles.itemPrice}>
				<Text>R$ {productlist.price}</Text>
			</View>
		</View>
	)
}