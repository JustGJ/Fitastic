import React, { useState } from 'react';
import InputText from 'components/ui/inputs/InputText';
import { Colors } from 'styles/variables';
import ButtonText from 'components/ui/buttons/ButtonText';
import { signUp } from 'styles';
import { getAuthInputs } from './config/authFormConfig';
import { NavigationProps } from 'types';
import { useMutation } from '@apollo/client';
import { SIGNIN } from 'graphql/auth';
import { useAuth } from 'contexts/AuthContext';

interface AuthFormProps extends NavigationProps {
  type: 'signIn' | 'signUp';
}

const AuthForm = ({ type, navigation }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signIn] = useMutation(SIGNIN);
  const { setAuthData } = useAuth();

  const customContainerStyle = type === 'signUp' && signUp.buttonContainer;

  const handleSubmitForm = async () => {
    if (type === 'signIn') {
      const response = await signIn({ variables: { email, password } });
      if (response.data?.signIn?.token) {
        setAuthData(response.data.signIn.token, response.data.signIn.user);
        navigation.navigate('MainStack');
      }
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
        <InputText
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
        label={`screens.auth.${type}.formButton`}
        backgroundColor={Colors.blueAzur}
        colorPressable={Colors.whiteSmoke}
        onPress={handleSubmitForm}
      />
    </>
  );
};

export default AuthForm;
