import React, { useState } from 'react';
import {Text, TextInput, View} from 'react-native';
import { COLORS } from '../../styles/colors';
import { style } from './style';


const SearchBar = ({text, onSearch, editable}) => {
    const [txt, setText] = useState(text)
    
    return (
        <View style={style.container}>
        <Text style={style.title}>
            {'Search'}
        </Text>
        <TextInput 
            value={txt}
            onChangeText={(txt)=>{
                setText(txt)
                onSearch(txt)
            }}
            placeholder={"Type any keyword"}
            style={style.textInput}
            placeholderTextColor={COLORS.grey}
            editable={editable}
        />
        </View>
    );
};
export default SearchBar;
