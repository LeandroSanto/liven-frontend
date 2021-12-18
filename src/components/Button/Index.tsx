import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ButtonProps{
  name: string;
  label?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({name, label, ...children}) => {
  return(
    <TouchableOpacity 
      style={styles.button}
    >
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  )
}