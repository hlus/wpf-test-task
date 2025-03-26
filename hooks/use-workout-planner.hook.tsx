import { useState } from 'react';

import ExercisesMock from '@/mock/exercises-response.json';
import { Exercise } from '@/models/exercise.dto';

export const useWorkoutPlanner = () => {
  const [exercises, setExercises] = useState<Exercise[]>(ExercisesMock.exercises);
  const [isEditing, setIsEditing] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const onSelectExercise = (exercise: Exercise) => setSelectedExercise(exercise);

  const markAsCompleted = (id: number) => {
    setCompletedExercises([...completedExercises, id]);
  };

  const startEditMode = () => setIsEditing(true);

  const disableEditing = () => setIsEditing(false);

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
    disableEditing,
    deleteExercise,
  };
};
