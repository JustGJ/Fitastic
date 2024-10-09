import React from 'react';
import { Colors, FontSizes } from 'styles/variables';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ShowPassword from 'components/auth/ShowPassword';
import { Pressable } from 'react-native';

interface IInputsConnection {
  showPassword: boolean;
  handleShowPassword: () => void;
  type: string;
}

export const getAuthInputs = ({ showPassword, handleShowPassword, type }: IInputsConnection) => [
  {
    id: 5,
    key: 'email',
    label: `screens.auth.${type}.email`,
    placeholder: `screens.auth.${type}.email`,
    labelColor: Colors.white,
    bgColor: Colors.grey_opacity_06,
    leftIcon: <FontAwesome name="envelope" size={FontSizes.medium} color={Colors.white} />,
    type: ['login', 'register'],
  },
  {
    id: 6,
    key: 'password',
    label: `screens.auth.${type}.password`,
    placeholder: `screens.auth.${type}.password`,
    secureTextEntry: !showPassword,
    bgColor: Colors.grey_opacity_06,
    labelColor: Colors.white,
    leftIcon: <FontAwesome name="lock" size={FontSizes.medium} color={Colors.white} />,
    rightIcon: <ShowPassword handleShowPassword={handleShowPassword} showPassword={showPassword} />,
    type: ['login', 'register'],
  },
  {
    id: 7,
    key: 'confirmPassword',
    label: 'screens.auth.register.confirmPassword',
    placeholder: 'screens.auth.register.confirmPassword',
    bgColor: Colors.grey_opacity_06,
    labelColor: Colors.white,
    leftIcon: <FontAwesome name="lock" size={FontSizes.medium} color={Colors.white} />,
    rightIcon: (
      <Pressable onPress={handleShowPassword}>
        <FontAwesome
          name={showPassword ? 'eye' : 'eye-slash'}
          size={FontSizes.medium}
          color={Colors.white}
        />
      </Pressable>
    ),
    type: ['register'],
  },
];
