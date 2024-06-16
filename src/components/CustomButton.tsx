import React from 'react';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import { customButton } from 'styles';
import { Colors } from 'styles/variables';

interface CustomButtonProps {
  label?: string;
  labelColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  rounded?: boolean;
  raised?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  colorPressable?: string;
  customContainer?: StyleProp<ViewStyle>;
  customText?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: () => void;
}

const CustomButton = ({
  label = '',
  labelColor = Colors.black,
  backgroundColor = Colors.whiteSmoke,
  borderColor = 'transparent',
  rounded = true,
  raised = false,
  startIcon,
  endIcon,
  customContainer,
  customText,
  colorPressable,
  disabled = false,
  onPress,
}: CustomButtonProps) => {
  const pressableStyles = ({ pressed }: { pressed: boolean }) => {
    let bgColor;
    if (disabled) {
      bgColor = Colors.greyLight;
    }
    if (pressed) {
      bgColor = colorPressable;
    } else {
      bgColor = backgroundColor;
    }

    return [{ backgroundColor: bgColor }];
  };

  return (
    <Pressable
      style={({ pressed }) => [
        customButton.button,
        rounded && customButton.rounded,
        { backgroundColor, borderColor },
        raised && customButton.shadow,
        customContainer,
        pressableStyles({ pressed }),
      ]}
      disabled={disabled}
      onPress={onPress}>
      <View style={customButton.buttonContainer}>
        {startIcon}
        <Text
          style={[customButton.buttonText, customText, { color: labelColor }]}>
          {label}
        </Text>
        {endIcon}
      </View>
    </Pressable>
  );
};

export default CustomButton;
