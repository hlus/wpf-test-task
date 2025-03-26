import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

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
      className={`mr-4 h-16 w-16 items-center justify-center rounded-full bg-gray-100
              ${isSelected ? 'border-2 border-yellow-400' : ''}`}>
      <Image
        source={{ uri: exercise.asset_url }}
        className="h-12 w-12 rounded-full"
        resizeMode="contain"
      />
      {isCompleted && (
        <View className="absolute bottom-0 right-0 rounded-full bg-green-500 p-1">
          <Text className="text-xs text-white">✓</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
