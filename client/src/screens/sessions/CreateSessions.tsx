import React, { useState } from 'react';
import { View, Text, Modal, Image, StyleSheet } from 'react-native';
import { Colors, FontSizes } from 'styles/variables';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputText from 'components/ui/inputs/InputText';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { defaultStyles } from 'styles/globals';
import ButtonText from 'components/ui/buttons/ButtonText';
import { createSession, modalExercises } from 'styles';
import ButtonIcon from 'components/ui/buttons/ButtonIcon';
import Exercices from 'screens/exercises/Exercises';
import { NavigationProps } from 'types';

const image = require('assets/images/developpe-couche.gif');

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
const CreateSession = ({ navigation }: NavigationProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={defaultStyles.container}>
      <InputText
        label="Nom de la séance"
        placeholder="Ex : pull / push, jambes, cardio ..."
        borderBottomColor={Colors.black}
        textColor={Colors.black}
        leftIcon={
          <SimpleLineIcons
            name="notebook"
            size={FontSizes.small}
            color={Colors.black}
          />
        }
      />
      <View style={createSession.note}>
        <Entypo
          name="info-with-circle"
          size={FontSizes.large}
          color={Colors.blueAzur}
        />
        <Image source={image} style={styles.image} />
        <Text style={createSession.noteText}>
          Une séance est un enchaînement d'exercices précis.
        </Text>
      </View>
      <ButtonText
        onPress={() => setShowModal(true)}
        label="Ajouter un exercice"
        backgroundColor={Colors.blueAzur}
        labelColor={Colors.white}
        customText={{ marginLeft: 10 }}
        startIcon={
          <Ionicons name="add-circle-outline" size={24} color={Colors.white} />
        }
      />
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={modalExercises.modalView}>
          <View style={modalExercises.header}>
            <Text style={modalExercises.title}>Ajouter exercices</Text>
            <ButtonIcon
              icon={<Ionicons name="close" size={24} color={Colors.black} />}
              backgroundColor={Colors.white}
              onPress={() => setShowModal(!showModal)}
              colorPressable={Colors.whiteSmoke}
              padding={5}
              customContainer={modalExercises.buttonClose}
            />
          </View>
          <View>
            <Exercices navigation={navigation} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateSession;
