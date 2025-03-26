import React from 'react';
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

  const renderExerciseCircle = ({ item, drag }: RenderItemParams<Exercise>) => (
    <WorkoutCircle
      key={item.id}
      exercise={item}
      isCompleted={item.completed}
      isSelected={selectedExercise?.id === item.id}
      isEditing={isEditing}
      onSelect={onSelectExercise}
      onStartEditMode={startEditMode}
      onDelete={deleteExercise}
      onDrag={drag}
    />
  );

  const keyExtractor = React.useCallback((item: Exercise) => item.id.toString(), []);

  const handleDragEnd = ({ data }: DragEndParams<Exercise>) => onOrderChange(data);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <DraggableFlatList
        horizontal
        data={exercises}
        showsHorizontalScrollIndicator={false}
        className="flex-grow-0 px-2 py-2"
        renderItem={renderExerciseCircle}
        keyExtractor={keyExtractor}
        onDragEnd={handleDragEnd}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {selectedExercise && <WorkoutCard exercise={selectedExercise} onReplace={markAsCompleted} />}
      </ScrollView>
      {isEditing && <EditMenu onDiscard={discardEditing} onSave={saveEditing} />}
    </SafeAreaView>
  );
};

export default WorkoutPlanner;
