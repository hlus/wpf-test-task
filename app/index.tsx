import { ScrollView, SafeAreaView } from 'react-native';

import { useWorkoutPlanner } from './use-workout-planner.hook';

import { WorkoutCard } from '@/components/workout-card/workout-card.component';
import { WorkoutCircle } from '@/components/workout-circle/workout-circle.component';
import { Exercise } from '@/models/exercise.dto';

const WorkoutPlanner = () => {
  const { exercises, selectedExercise, onSelectExercise, markAsCompleted } = useWorkoutPlanner();

  const renderExerciseCircle = (exercise: Exercise) => (
    <WorkoutCircle
      key={exercise.id}
      exercise={exercise}
      isCompleted={exercise.completed}
      isSelected={selectedExercise?.id === exercise.id}
      onSelect={onSelectExercise}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-grow-0">
        {exercises.map(renderExerciseCircle)}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {selectedExercise && (
          <WorkoutCard exercise={selectedExercise} onReplace={markAsCompleted} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkoutPlanner;
