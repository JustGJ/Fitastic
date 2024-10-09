import React from 'react';
import BackgroundImage from '../Backgroundimage';
import TitleApp from '../TitleApp';
import { authContainer } from 'styles';
import { defaultStyles } from 'styles/globals';
import AuthFooter from './AuthFooter';
import { NavigationProps } from 'types';

const imageSource = require('assets/images/started-bg.jpg');

interface LoginContainerProps extends NavigationProps {
  children: React.ReactNode;
  type: string;
}

const AuthContainer = ({ children, type, navigation }: LoginContainerProps) => {
  const handleNavigateToLoginOrRegister = () => {
    const destination = type === 'login' ? 'Register' : 'Login';
    navigation.navigate(destination);
  };
  return (
    <BackgroundImage style={defaultStyles.container} source={imageSource} overlay>
      <TitleApp
        containerStyles={authContainer.titleApp}
        description={`screens.auth.${type}.title`}
      />
      {children}
      <AuthFooter onPress={handleNavigateToLoginOrRegister} text={`screens.auth.${type}.footer`} />
    </BackgroundImage>
  );
};

export default AuthContainer;
