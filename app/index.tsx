import { useCallback } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import DraggableFlatList, { DragEndParams, RenderItemParams } from 'react-native-draggable-flatlist';

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
    onOrderChange,
  } = useWorkoutPlanner();

  const renderExerciseCircle = useCallback(
    ({ item, drag }: RenderItemParams<Exercise>) => (
      <WorkoutCircle
        exercise={item}
        isCompleted={item.completed}
        isSelected={selectedExercise?.id === item.id}
        isEditing={isEditing}
        onPlay={markAsCompleted}
        onSelect={onSelectExercise}
        onStartEditMode={startEditMode}
        onDelete={deleteExercise}
        onDrag={drag}
      />
    ),
    [selectedExercise?.id, isEditing, onSelectExercise, startEditMode, deleteExercise]
  );

  const keyExtractor = useCallback((item: Exercise) => item.id.toString(), []);

  const handleDragEnd = useCallback(({ data }: DragEndParams<Exercise>) => onOrderChange(data), [onOrderChange]);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <DraggableFlatList
        horizontal
        data={exercises}
        showsHorizontalScrollIndicator={false}
        className="flex-grow-0 px-4 py-4"
        renderItem={renderExerciseCircle}
        keyExtractor={keyExtractor}
        onDragEnd={handleDragEnd}
      />
      <ScrollView showsVerticalScrollIndicator={false}>{selectedExercise && <WorkoutCard exercise={selectedExercise} />}</ScrollView>
      {isEditing && <EditMenu onDiscard={discardEditing} onSave={saveEditing} />}
    </SafeAreaView>
  );
};

export default WorkoutPlanner;
