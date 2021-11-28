import React from 'react';
import {View,Text, TextInput} from 'react-native';

export function Header(){
    return(
        <View>
            <TextInput 
                placeholder='Busca'
            />
        </View>
    )
}