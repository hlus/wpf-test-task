import { useState } from 'react';

import ExercisesMock from '@/mock/exercises-response.json';
import { Exercise } from '@/models/exercise.dto';

export const useWorkoutPlanner = () => {
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const exercises = ExercisesMock.exercises;
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const onSelectExercise = (exercise: Exercise) => setSelectedExercise(exercise);

  const markAsCompleted = (id: number) => {
    setCompletedExercises([...completedExercises, id]);
  };

  const exercisesWithCompleted = exercises.map((exercise) => ({
    ...exercise,
    completed: completedExercises.some((id) => id === exercise.id),
  }));

  return { exercises: exercisesWithCompleted, selectedExercise, onSelectExercise, markAsCompleted };
};
