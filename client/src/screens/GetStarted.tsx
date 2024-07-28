import React, { useEffect } from 'react';
import { getStarted } from 'styles';
import TitleApp from 'components/TitleApp';
import { INavigationProps } from 'types/interfaces';
import BackgroundImage from '../components/Backgroundimage';

const imageSource = require('assets/images/started-bg.jpg');

const GetStarted = ({ navigation }: INavigationProps) => {
  const { navigate } = navigation;

  useEffect(() => {
    setTimeout(() => {
      navigate('SignIn');
    }, 2000);
  }, [navigate]);

  return (
    <BackgroundImage source={imageSource} overlay>
      <TitleApp containerStyles={getStarted.titleApp} />
    </BackgroundImage>
  );
};

export default GetStarted;
