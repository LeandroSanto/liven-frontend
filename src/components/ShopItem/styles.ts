import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../assets/theme';

export const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 230,
       
        backgroundColor: COLORS.BACKGROUND_WHITE,
        
        borderRadius: 6,
        marginHorizontal: 3,
        padding:25,
        margin: 5
    },

    imageBox: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 1.2,

        borderRadius: 6,
    },

    itemDescript: {
        alignContent: 'center',

        justifyContent: 'center',
        fontFamily: FONTS.BOLD,
    
    },

    itemStock: {
        color:COLORS.TEXT_SECONDARY_COLOR,
        fontFamily: FONTS.REGULAR,
        fontSize: 9,
    },

    itemPrice: {
        alignItems:'center',
        justifyContent: 'center',
    },
})