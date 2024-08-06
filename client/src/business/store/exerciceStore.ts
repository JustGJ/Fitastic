import { create } from 'zustand';

interface ExerciceState {
  exercices: [];
  setExercices: (exercices: []) => void;
}

export const useExerciceStore = create<ExerciceState>(set => ({
  exercices: [],
  setExercices: exercices => set({ exercices }),
}));
