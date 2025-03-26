import { useState, useRef } from 'react';

import ExercisesMock from '@/mock/exercises-response.json';
import { Exercise } from '@/models/exercise.dto';

export const useWorkoutPlanner = () => {
  const copyBeforeEditing = useRef<Exercise[]>(ExercisesMock.exercises);

  const [exercises, setExercises] = useState<Exercise[]>(ExercisesMock.exercises);
  const [isEditing, setIsEditing] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const onSelectExercise = (exercise: Exercise) => setSelectedExercise(exercise);

  const markAsCompleted = (id: number) => {
    setCompletedExercises([...completedExercises, id]);
  };

  const startEditMode = () => {
    copyBeforeEditing.current = exercises;
    setIsEditing(true);
  };

  const discardEditing = () => {
    setExercises(copyBeforeEditing.current);
    setIsEditing(false);
  };

  const saveEditing = () => {
    copyBeforeEditing.current = exercises;
    setIsEditing(false);
  };

  const deleteExercise = (id: number) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  const exercisesWithCompleted = exercises.map((exercise) => ({
    ...exercise,
    completed: completedExercises.some((id) => id === exercise.id),
  }));

  return {
    exercises: exercisesWithCompleted,
    selectedExercise,
    onSelectExercise,
    markAsCompleted,
    isEditing,
    startEditMode,
    discardEditing,
    saveEditing,
    deleteExercise,
  };
};
