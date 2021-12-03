import React from 'react';
import { View } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { InputField } from '../InputField/Index';

import { styles } from './styles';
import { COLORS } from '../../assets/theme';

export function Header(){
	return(
		<View style={styles.container}>
			<MCIcon name="magnify" size={30} color={COLORS.ICONS_BLACK_COLOR}  style={styles.icon}/>
			<InputField label='Busca' />
		</View>
	)
}