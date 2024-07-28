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

export const getAuthInputs = ({
  showPassword,
  handleShowPassword,
  type,
}: IInputsConnection) => {
  const emailLabel = type === 'signIn' ? 'Email' : 'Entrez votre email*';
  const emailPlaceholder =
    type === 'signIn' ? 'Email' : 'Email ou mot de passe';

  const passwordLabel =
    type === 'signIn' ? 'Mot de passe' : 'Entrez votre mot de passe*';
  const passwordPlaceholder =
    type === 'signIn' ? 'Mot de passe' : 'Confirmer le mot de passe';

  const confirmPasswordLabel = 'Confirmer le mot de passe';
  const confirmPasswordPlaceholder = 'Confirmer le mot de passe';

  return [
    {
      id: 5,
      key: 'email',
      label: emailLabel,
      placeholder: emailPlaceholder,
      labelColor: Colors.white,
      bgColor: Colors.grey_opacity_06,
      leftIcon: (
        <FontAwesome
          name="envelope"
          size={FontSizes.medium}
          color={Colors.white}
        />
      ),
      type: ['signIn', 'signUp'],
    },
    {
      id: 6,
      key: 'password',
      label: passwordLabel,
      placeholder: passwordPlaceholder,
      secureTextEntry: !showPassword,
      bgColor: Colors.grey_opacity_06,
      labelColor: Colors.white,
      leftIcon: (
        <FontAwesome name="lock" size={FontSizes.medium} color={Colors.white} />
      ),
      rightIcon: (
        <ShowPassword
          handleShowPassword={handleShowPassword}
          showPassword={showPassword}
        />
      ),
      type: ['signIn', 'signUp'],
    },
    {
      id: 7,
      key: 'confirmPassword',
      label: confirmPasswordLabel,
      placeholder: confirmPasswordPlaceholder,
      bgColor: Colors.grey_opacity_06,
      labelColor: Colors.white,
      leftIcon: (
        <FontAwesome name="lock" size={FontSizes.medium} color={Colors.white} />
      ),
      rightIcon: (
        <Pressable onPress={handleShowPassword}>
          <FontAwesome
            name={showPassword ? 'eye' : 'eye-slash'}
            size={FontSizes.medium}
            color={Colors.white}
          />
        </Pressable>
      ),
      type: ['signUp'],
    },
  ];
};
