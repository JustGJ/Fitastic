import React, { ReactNode } from 'react';
import { ImageBackground, View, ImageBackgroundProps, StyleProp, ViewStyle } from 'react-native';
import { defaultStyles } from 'styles/globals';
import { Colors } from 'styles/variables';
import { backgroundImage } from 'styles';

interface IBackgroundImageProps extends ImageBackgroundProps {
  overlay?: boolean;
  overlayColor?: string;
  children: ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
}

const BackgroundImage = ({
  overlay = false,
  overlayColor = Colors.black_opacity_02,
  children,
  source,
}: IBackgroundImageProps) => {
  const showOverlay = () =>
    overlay && <View style={[backgroundImage.overlay, { backgroundColor: overlayColor }]} />;
  return (
    <ImageBackground source={source} resizeMode="cover" style={defaultStyles.container}>
      {showOverlay()}
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;
