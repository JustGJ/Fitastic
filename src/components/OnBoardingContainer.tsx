import React from 'react';
import BackgroundImage from './BackgroundImage';
import TitleApp from './TitleApp';
import { onBoardingContainer } from 'styles';
import { defaultStyles } from 'styles/globals';

const imageSource = require('assets/images/started-bg.jpg');

interface ISignInContainerProps {
  children: React.ReactNode;
  description: string;
}

const OnBoardingContainer = ({
  children,
  description,
}: ISignInContainerProps) => (
  <BackgroundImage style={defaultStyles.container} source={imageSource} overlay>
    <TitleApp
      containerStyles={onBoardingContainer.titleApp}
      description={description}
    />
    {children}
  </BackgroundImage>
);

export default OnBoardingContainer;
