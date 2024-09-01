import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextInput, View } from 'react-native';
import { inputText } from 'styles';
import { Colors } from 'styles/variables';

interface IInputProps {
  label?: string;
  outlined?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  numLines?: number;
  onChangeHandler?: () => void;
  secure?: boolean;
  validate?: () => void;
  errorMessage?: string;
  errorColor?: string;
  labelColor?: string;
  textColor?: string;
  bgColor?: string;
  borderBottomColor?: string;
  borderColor?: string;
}

const Input = ({
  value,
  onChangeText,
  label,
  outlined,
  placeholder,
  leftIcon,
  rightIcon,
  numLines,
  secure,
  validate,
  errorMessage,
  errorColor = 'red',
  labelColor = 'black',
  textColor = 'white',
  bgColor = 'white',
  borderBottomColor = Colors.white_opacity_07,
  borderColor = Colors.white_opacity_07,
}: IInputProps) => {
  const { t } = useTranslation();

  const containerBorder = outlined ? inputText.outlined : inputText.standard;

  const getPlaceholder = () => {
    if (placeholder) {
      return t(placeholder);
    } else if (label) {
      return `Entrer ${label}`;
    }
    return '';
  };

  return (
    <View>
      {label && (
        <Text style={[inputText.label, { color: labelColor }]}>{t(label)}</Text>
      )}
      <View
        style={[
          inputText.container,
          containerBorder,
          { backgroundColor: bgColor, borderBottomColor, borderColor },
        ]}>
        {leftIcon && <View style={inputText.leftIcon}>{leftIcon}</View>}
        <TextInput
          value={value}
          placeholder={getPlaceholder()}
          onChangeText={onChangeText}
          onEndEditing={validate}
          secureTextEntry={secure}
          multiline={numLines && numLines > 1 ? true : false}
          numberOfLines={numLines}
          style={[inputText.input, { color: textColor }]}
        />
        {rightIcon && <View style={inputText.rightIcon}>{rightIcon}</View>}
      </View>
      {errorMessage && (
        <Text style={{ color: errorColor }}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default Input;
