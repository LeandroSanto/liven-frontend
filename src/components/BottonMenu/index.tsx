import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';

export function BottonMenu(){
	return (
		<View style= {styles.container}>
			<View style={styles.bottoMenuView}>
				<TouchableOpacity>
					<MCIcon name="home-variant" size={34} />
				</TouchableOpacity>
				<TouchableOpacity>
					<MIcon name="favorite" size={34} />
				</TouchableOpacity>
				<TouchableOpacity>
					<MCIcon name="shopping" size={34} />
				</TouchableOpacity>
				<TouchableOpacity>
					<MCIcon name="account" size={34} />
				</TouchableOpacity>
			</View>
		</View>
	)
}