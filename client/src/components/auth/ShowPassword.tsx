import React from 'react';
import { Colors, FontSizes } from 'styles/variables';
import { Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface IShowPasswordProps {
  handleShowPassword: () => void;
  showPassword: boolean;
}

const ShowPassword = ({ handleShowPassword, showPassword }: IShowPasswordProps) => (
  <Pressable onPress={handleShowPassword}>
    <FontAwesome
      name={showPassword ? 'eye' : 'eye-slash'}
      size={FontSizes.medium}
      color={Colors.white}
    />
  </Pressable>
);

export default ShowPassword;
