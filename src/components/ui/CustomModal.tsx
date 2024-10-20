import React from 'react';
import { Text, View } from 'react-native';
import { Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { customModal } from 'styles';
import ButtonIcon from './buttons/ButtonIcon';
import { Colors } from 'styles/variables';
import { NavigationProps } from 'types';

interface ICustomModal extends NavigationProps {
  currentState: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  children?: any;
}

const CustomModal = ({ currentState, setState, children }: ICustomModal) => {
  const handleCloseModal = () => {
    setState(!currentState);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={currentState}>
      <View style={customModal.view}>
        <View style={customModal.header}>
          <Text style={customModal.title}>Ajouter exercices</Text>
          <ButtonIcon
            icon={<Ionicons name="close" size={24} color={Colors.black} />}
            backgroundColor={Colors.white}
            onPress={handleCloseModal}
            colorPressable={Colors.whiteSmoke}
            padding={5}
            customContainer={customModal.buttonClose}
          />
        </View>
        <View />
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;
