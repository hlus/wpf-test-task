import React from 'react';
import { View } from 'react-native';

interface Props {}

export const WorkoutCircle: React.FC<Props> = () => {
  return (
    <View>
      <View className="h-10 w-10 rounded-full bg-gray-200"></View>
    </View>
  );
};
