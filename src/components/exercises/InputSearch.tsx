import React from 'react';
import { View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InputText from 'components/ui/inputs/InputText';
import { Colors } from 'styles/variables';

interface ISearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const InputSearch = ({ value, onChangeText }: ISearchInputProps) => (
  <View>
    <InputText
      leftIcon={<EvilIcons name="search" size={20} color={Colors.black} />}
      rightIcon={
        value.length > 0 ? (
          <EvilIcons name="close" size={20} color={Colors.black} onPress={() => onChangeText('')} />
        ) : null
      }
      textColor={Colors.black}
      placeholder="Rechercher un exercice"
      borderBottomColor={Colors.greyLight}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export default InputSearch;
