import { View } from 'react-native';
import React from 'react';
import { Colors } from 'styles/variables';
import ButtonText from 'components/ui/buttons/ButtonText';
import { exercisesListButtonActions } from 'styles';

interface IExerciseListButtonActions {
  setShowExercisesList: React.Dispatch<React.SetStateAction<boolean>>;
  setExercisesSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const ExerciseListButtonActions = ({
  setShowExercisesList,
  setExercisesSelected,
}: IExerciseListButtonActions) => {
  const handleRemoveExercisesSelected = () => {
    setExercisesSelected([]);
  };

  const handleAddExercisesSelected = () => {
    setShowExercisesList(false);
  };
  return (
    <View style={exercisesListButtonActions.buttonsContainer}>
      <ButtonText
        label="Effacer"
        labelColor={Colors.white}
        backgroundColor={Colors.orange}
        customContainer={exercisesListButtonActions.buttonContainer}
        onPress={handleRemoveExercisesSelected}
      />
      <ButtonText
        label="Valider"
        labelColor={Colors.white}
        backgroundColor={Colors.blueAzur}
        customContainer={exercisesListButtonActions.buttonContainer}
        onPress={handleAddExercisesSelected}
      />
    </View>
  );
};

export default ExerciseListButtonActions;
