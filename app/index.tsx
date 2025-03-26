import { useState } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

import { WorkoutCard } from '@/components/workout-card/workout-card.component';
import { WorkoutCircle } from '@/components/workout-circle/workout-circle.component';
import ExercisesMock from '@/mock/exercises-response.json';
import { Exercise } from '@/models/exercise.dto';

const WorkoutPlanner = () => {
  const exercises = ExercisesMock.exercises;
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const onSelectExercise = (exercise: Exercise) => setSelectedExercise(exercise);

  const renderExerciseCircle = (exercise: Exercise) => (
    <WorkoutCircle
      key={exercise.id}
      exercise={exercise}
      isSelected={selectedExercise?.id === exercise.id}
      onSelect={onSelectExercise}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
        {exercises.map(renderExerciseCircle)}
      </ScrollView>
      {selectedExercise && <WorkoutCard exercise={selectedExercise} />}
    </SafeAreaView>
  );
};

export default WorkoutPlanner;
