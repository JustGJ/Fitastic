import React, { useState } from 'react';
import Input from 'components/ui/inputs/InputText';
import { Colors } from 'styles/variables';
import ButtonText from 'components/ui/buttons/ButtonText';
import { signUp } from 'styles';
import { API_EMAIL, API_PASSWORD } from '@env';
import { getAuthInputs } from './config/authFormConfig';
import { INavigationProps } from 'types/interfaces';

interface IAuthFormProps extends INavigationProps {
  type: 'signIn' | 'signUp';
}

const AuthForm = ({ type, navigation }: IAuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const labelButtonText =
    type === 'signUp' ? 'Créer un compte' : 'Se connecter';

  const customContainerStyle = type === 'signUp' && signUp.buttonContainer;

  const handleSubmitForm = () => {
    if (type === 'signIn' && email === API_EMAIL && password === API_PASSWORD) {
      navigation.navigate('Main');
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (key: string, value: string) => {
    if (key === 'email') {
      setEmail(value);
    } else if (key === 'password') {
      setPassword(value);
    } else if (key === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const getValue = (key: string) => {
    if (key === 'email') {
      return email;
    } else if (key === 'password') {
      return password;
    } else if (key === 'confirmPassword') {
      return confirmPassword;
    }
  };

  const inputs = getAuthInputs({
    showPassword,
    handleShowPassword: handleShowPassword,
    type,
  }).filter(input => input.type.includes(type));

  return (
    <>
      {inputs.map(input => (
        <Input
          key={input.id}
          bgColor={input.bgColor}
          secure={input.secureTextEntry}
          label={input.label}
          placeholder={input.placeholder}
          labelColor={Colors.white}
          leftIcon={input.leftIcon}
          rightIcon={input.rightIcon}
          value={getValue(input.key)}
          onChangeText={value => handleInputChange(input.key, value)}
        />
      ))}
      <ButtonText
        customContainer={customContainerStyle}
        label={labelButtonText}
        backgroundColor={Colors.blueAzur}
        colorPressable={Colors.whiteSmoke}
        onPress={handleSubmitForm}
      />
    </>
  );
};

export default AuthForm;
