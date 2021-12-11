import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../assets/theme';

export const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 260,
        flexDirection: 'column',
        justifyContent: 'center',

        backgroundColor: COLORS.BACKGROUND_WHITE,
        
        borderRadius: 6,
        marginHorizontal: 3,
    },
    imageBox: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 1.2,

        borderRadius: 6,
    },
    itemDescript: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONTS.BOLD,
    },
    itemStock: {
        color:COLORS.TEXT_SECONDARY_COLOR,
        fontFamily: FONTS.REGULAR,
    },
    itemPrice: {
        alignItems:'center',
        justifyContent: 'center',
    },
})