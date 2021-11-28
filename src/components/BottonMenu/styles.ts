import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/white-theme'

export const styles = StyleSheet.create({
	container: {
			flex: 1,
			alignSelf: 'center',
			position: 'absolute',
			bottom: 0,
			justifyContent: 'center',
			padding: 20,
	},

	bottoMenuView: {
			flexDirection: 'row',
			alignSelf: 'center',
			justifyContent: 'space-between',       
			paddingHorizontal: 20,
			color: COLORS.ICONS_SECONDARY_COLOR,
	}
});