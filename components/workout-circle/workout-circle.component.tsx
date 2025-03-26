import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { CheckedIcon } from '../icons/checked.icon';
import { PlayIcon } from '../icons/play.icon';

import { Exercise } from '@/models/exercise.dto';

interface Props {
  isEditing?: boolean;
  isSelected?: boolean;
  isCompleted?: boolean;
  exercise: Exercise;

  onSelect: (exercise: Exercise) => void;
  onStartEditMode?: () => void;
  onDelete?: (id: number) => void;
  onDrag?: () => void;
}

export const WorkoutCircle: React.FC<Props> = ({
  isEditing = false,
  isSelected,
  isCompleted,
  exercise,
  onSelect,
  onStartEditMode,
  onDelete = () => null,
  onDrag = () => null,
}) => {
  const handleSelect = () => onSelect(exercise);
  const handleDelete = () => onDelete(exercise.id);

  return (
    <TouchableOpacity
      onLongPress={isEditing ? onDrag : onStartEditMode}
      onPress={handleSelect}
      className={`relative mr-4 h-[73px] w-[73px] items-center justify-center rounded-full bg-white ${isSelected ? 'border-2 border-yellow-400' : ''}`}>
      <View className="rounded-full border-2 border-gray-200">
        <Image source={{ uri: exercise.asset_url }} className="h-[64px] w-[64px] rounded-full" resizeMode="contain" />
        {isEditing && (
          <TouchableOpacity
            onPress={handleDelete}
            className="absolute -right-0.5 -top-0.5 h-5 w-5 items-center justify-center rounded-full bg-red-700">
            <View className="h-0.5 w-2 rounded-full bg-white" />
          </TouchableOpacity>
        )}
        {isCompleted && !isSelected && (
          <View className="absolute bottom-0 right-0 h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-yellow-400">
            <CheckedIcon />
          </View>
        )}
        {isSelected && (
          <View className="absolute bottom-0 right-0 h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-yellow-400">
            <PlayIcon />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
