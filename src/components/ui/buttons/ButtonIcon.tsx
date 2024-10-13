import React from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { Colors } from 'styles/variables';

interface IButtonIconProps {
  icon: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  rounded?: boolean;
  raised?: boolean;
  colorPressable?: string;
  customContainer?: StyleProp<ViewStyle>;
  disabled?: boolean;
  padding?: number;
  customStyles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const ButtonIcon = ({
  icon,
  backgroundColor = Colors.whiteSmoke,
  borderColor = 'transparent',
  rounded = true,
  raised = false,
  colorPressable,
  customContainer,
  disabled = false,
  padding = 10,
  customStyles,
  onPress,
}: IButtonIconProps) => {
  const pressableStyles = ({ pressed }: { pressed: boolean }) => {
    let bgColor = backgroundColor;
    if (disabled) {
      bgColor = Colors.greyLight;
    } else if (pressed) {
      console.log('pressed');
      bgColor = colorPressable || backgroundColor;
    }

    return [
      {
        backgroundColor: bgColor,
        borderColor,
        borderRadius: rounded ? 50 : 0,
        borderWidth: borderColor ? 1 : 0,
        padding,
      },
      raised && {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
      },
      customStyles,
      customContainer,
    ];
  };

  return (
    <Pressable style={pressableStyles} disabled={disabled} onPress={onPress}>
      <View>{icon}</View>
    </Pressable>
  );
};

export default ButtonIcon;
