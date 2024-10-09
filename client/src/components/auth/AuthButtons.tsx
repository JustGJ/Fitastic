import React from 'react';
import ButtonText from 'components/ui/buttons/ButtonText';
import { authButtons } from './config/authButtonsConfig';
import { login } from 'styles';

const AuthButtons = () => (
  <>
    {authButtons.map(btn => (
      <ButtonText
        key={btn.id}
        label={btn.label}
        labelColor={btn.labelColor}
        colorPressable={btn.colorPressable}
        startIcon={btn.icon}
        backgroundColor={btn.backgroundColor}
        onPress={btn.handlePress}
        customContainer={login.button}
        customText={login.buttonText}
      />
    ))}
  </>
);

export default AuthButtons;
