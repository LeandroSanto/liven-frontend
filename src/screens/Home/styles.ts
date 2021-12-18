import { Roboto_100Thin } from '@expo-google-fonts/roboto';
import { StatusBar, StyleSheet } from 'react-native';
import { COLORS } from '../../assets/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },

    searchInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        
        paddingTop:15,
    },

    listContainer: {
        alignItems: 'center',
        paddingVertical:3,
    },

    listItem: {
        padding: 7,

        margin: 5,
    },
    
    icon: {
        paddingRight:10,
    }
});