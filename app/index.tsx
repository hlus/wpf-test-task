import { ScrollView, SafeAreaView } from 'react-native';

import { useWorkoutPlanner } from '../hooks/use-workout-planner.hook';

import { EditMenu } from '@/components/edit-menu/edit-menu.component';
import { WorkoutCard } from '@/components/workout-card/workout-card.component';
import { WorkoutCircle } from '@/components/workout-circle/workout-circle.component';
import { Exercise } from '@/models/exercise.dto';

const WorkoutPlanner = () => {
  const {
    exercises,
    selectedExercise,
    onSelectExercise,
    markAsCompleted,
    isEditing,
    startEditMode,
    discardEditing,
    saveEditing,
    deleteExercise,
  } = useWorkoutPlanner();

  const renderExerciseCircle = (exercise: Exercise) => (
    <WorkoutCircle
      key={exercise.id}
      exercise={exercise}
      isCompleted={exercise.completed}
      isSelected={selectedExercise?.id === exercise.id}
      isEditing={isEditing}
      onSelect={onSelectExercise}
      onStartEditMode={startEditMode}
      onDelete={deleteExercise}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-grow-0 px-2 py-2">
        {exercises.map(renderExerciseCircle)}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {selectedExercise && (
          <WorkoutCard exercise={selectedExercise} onReplace={markAsCompleted} />
        )}
      </ScrollView>
      {isEditing && <EditMenu onDiscard={discardEditing} onSave={saveEditing} />}
    </SafeAreaView>
  );
};

export default WorkoutPlanner;
