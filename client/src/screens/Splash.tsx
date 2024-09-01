import React, { useEffect } from 'react';
import { splash } from 'styles';
import TitleApp from 'components/TitleApp';
import { NavigationProps } from 'types';
import BackgroundImage from '../components/Backgroundimage';

const imageSource = require('assets/images/started-bg.jpg');

const Splash = ({ navigation }: NavigationProps) => {
  const { navigate } = navigation;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('AuthStack');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <BackgroundImage source={imageSource} overlay>
      <TitleApp containerStyles={splash.titleApp} />
    </BackgroundImage>
  );
};

export default Splash;
