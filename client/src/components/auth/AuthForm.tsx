import React, { useState } from 'react';
import InputText from 'components/ui/inputs/InputText';
import { Colors } from 'styles/variables';
import ButtonText from 'components/ui/buttons/ButtonText';
import { getAuthInputs } from './config/authFormConfig';
import { NavigationProps } from 'types';
import { useAuth } from 'hooks/useAuth';
import { register } from 'styles';

interface AuthFormProps extends NavigationProps {
  type: 'login' | 'register';
}

const AuthForm = ({ type, navigation }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useAuth();

  const customContainerStyle = type === 'register' && register.buttonContainer;

  const handleSubmitForm = async () => {
    if (type === 'login') {
      loginUser({ username: email, password });
      navigation.navigate('MainStack');
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
