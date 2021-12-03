import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {COLORS} from '../../assets/theme'
import { styles } from './styles';

export function BottonMenu(){
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.TouchableButton}>
				<MCIcon name="home-variant" size={39} color={COLORS.ICONS_SECONDARY_COLOR} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.TouchableButton}>
				<MIcon name="favorite" size={39} color={COLORS.ICONS_SECONDARY_COLOR}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.TouchableButton}>
				<MCIcon name="shopping" size={39} color={COLORS.ICONS_SECONDARY_COLOR} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.TouchableButton}>
				<MCIcon name="account" size={39} color={COLORS.ICONS_SECONDARY_COLOR}/>
			</TouchableOpacity>
		</View>
	)
}