import React from 'react';
import ButtonText from 'components/ui/buttons/ButtonText';
import { signIn } from 'styles';
import { authButtons } from './config/authButtonsConfig';

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
        customContainer={signIn.button}
        customText={signIn.buttonText}
      />
    ))}
  </>
);

export default AuthButtons;
