import React from 'react';
import CustomModal from 'components/ui/CustomModal';
import ExercisesList from '.';
import ExerciseListButtonActions from './ExerciseListButtonActions';
import { NavigationProps } from 'types';

interface IExerciseListModal extends NavigationProps {
  exercisesSelected: string[];
  showExercisesList: boolean;
  setShowExercisesList: React.Dispatch<React.SetStateAction<boolean>>;
  setExercisesSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const ExerciseListModal = ({
  exercisesSelected,
  setExercisesSelected,
  setShowExercisesList,
  showExercisesList,
  navigation,
}: IExerciseListModal) => (
  <CustomModal
    currentState={showExercisesList}
    setState={setShowExercisesList}
    navigation={navigation}>
    <ExercisesList
      navigation={navigation}
      exercisesSelected={exercisesSelected}
      setExercisesSelected={setExercisesSelected}
      setShowExercisesList={setShowExercisesList}
      origin="createSession"
    />
    {exercisesSelected.length > 0 && (
      <ExerciseListButtonActions
        setShowExercisesList={setShowExercisesList}
        setExercisesSelected={setExercisesSelected}
      />
    )}
  </CustomModal>
);

export default ExerciseListModal;
