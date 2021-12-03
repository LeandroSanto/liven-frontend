import React from 'react';
import { View,Text, Image } from 'react-native';

import { styles } from './styles';

interface ShopItemProps {
	image: string
	name: string
	stock: number
	price: string
}

export const ShopItem:React.FunctionComponent<ShopItemProps> = ({image,name,stock,price}) =>{
	return(
		<View style={styles.container}>
			<Image source={{uri:`${image}`}} style={styles.imageBox}/>
			<View style={styles.itemDescript}>
				<Text>{name}</Text>
				<Text style={styles.itemStock}>Em Estoque: {stock}</Text>
			</View>
			<View style={styles.itemPrice}>
				<Text>R$ {price}</Text>
			</View>
		</View>
	)
}