import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

interface InputFieldProps {
  label?: string,
  name?: string,
}

export const InputField: React.FC <InputFieldProps> = ({label,name,...children}) => {
  return (
  <View>
     <TextInput style={styles.input}
      placeholder={label}
      {...children}
    />
  </View>
  )
}