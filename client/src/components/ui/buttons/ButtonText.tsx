import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import { buttonText } from 'styles';
import { Colors } from 'styles/variables';

interface IButtonTextProps {
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

const Button = ({
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
}: IButtonTextProps) => {
  const { t } = useTranslation();

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
        buttonText.button,
        rounded && buttonText.rounded,
        { backgroundColor, borderColor },
        raised && buttonText.shadow,
        customContainer,
        pressableStyles({ pressed }),
      ]}
      disabled={disabled}
      onPress={onPress}>
      <View style={buttonText.buttonContainer}>
        {startIcon}
        <Text
          style={[buttonText.buttonText, customText, { color: labelColor }]}>
          {t(label)}
        </Text>
        {endIcon}
      </View>
    </Pressable>
  );
};

export default Button;
