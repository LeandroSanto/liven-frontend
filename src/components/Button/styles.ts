import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../assets/theme';

export const styles = StyleSheet.create({

  button:{
    backgroundColor: COLORS.BUTTON_PRIMARY_COLOR,
    padding: 10,    
  },
  
  buttonText: {
    fontFamily: FONTS.BOLD,
    color: COLORS.TEXT_BASE_COLOR,
  }

})