import React, { useEffect } from 'react';
import { getStarted } from 'styles';
import TitleApp from 'components/TitleApp';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import BackgroundImage from 'components/Backgroundimage';

interface GetStartedProps {
  navigation: NavigationProp<ParamListBase>;
}
const imageSource = require('assets/images/started-bg.jpg');

const GetStarted = ({ navigation }: GetStartedProps) => {
  const { navigate } = navigation;

  useEffect(() => {
    setTimeout(() => {
      navigate('SignIn');
    }, 2000);
  }, []);

  return (
    <BackgroundImage source={imageSource} overlay>
      <TitleApp containerStyles={getStarted.titleApp} />
    </BackgroundImage>
  );
};

export default GetStarted;
