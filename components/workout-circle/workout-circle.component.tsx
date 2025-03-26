import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { CheckedIcon } from '../icons/checked.icon';
import { PlayIcon } from '../icons/play.icon';

import { Exercise } from '@/models/exercise.dto';

interface Props {
  isSelected?: boolean;
  isCompleted?: boolean;
  exercise: Exercise;

  onSelect: (exercise: Exercise) => void;
}

export const WorkoutCircle: React.FC<Props> = ({ isSelected, isCompleted, exercise, onSelect }) => {
  const handleSelect = () => onSelect(exercise);

  return (
    <TouchableOpacity
      onPress={handleSelect}
      className={`mr-4 h-16 w-16 items-center justify-center rounded-full bg-white
              ${isSelected ? 'border-2 border-yellow-400' : ''}`}>
      <Image
        source={{ uri: exercise.asset_url }}
        className="h-12 w-12 rounded-full border-2 border-gray-200"
        resizeMode="contain"
      />
      {isCompleted && !isSelected && (
        <View className="absolute bottom-0 right-0 rounded-full border-2 border-white bg-yellow-400">
          <CheckedIcon />
        </View>
      )}
      {isSelected && (
        <View className="absolute bottom-0 right-0 h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-yellow-400">
          <PlayIcon />
        </View>
      )}
    </TouchableOpacity>
  );
};
