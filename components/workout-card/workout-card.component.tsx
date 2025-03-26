import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ActionButton } from './action-button.component';
import { EquipmentMap } from './equipment';
import { DocumentIcon } from '../icons/document.icon';
import { QuestionCircleIcon } from '../icons/question-circle.icon';
import { ReplaceIcon } from '../icons/replace.icon';
import { WarmupIcon } from '../icons/warmup.icon';

import { Exercise } from '@/models/exercise.dto';

interface WorkoutCardProps {
  exercise: Exercise;

  onReplace?: (id: number) => void;
  onInstructionsPress?: () => void;
  onWarmUpPress?: () => void;
  onFAQPress?: () => void;
}

export const WorkoutCard: React.FC<WorkoutCardProps> = ({
  exercise,
  onReplace = () => null,
  onInstructionsPress = () => null,
  onWarmUpPress = () => null,
  onFAQPress = () => null,
}) => {
  const handleReplace = () => onReplace(exercise.id);

  return (
    <View className="mx-4 my-2 rounded-xl bg-gray-50 p-4 shadow-sm">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-xl font-bold text-gray-800">{exercise.name}</Text>
        <TouchableOpacity
          onPress={handleReplace}
          className="flex-row items-center rounded-full bg-yellow-300 px-4 py-2">
          <ReplaceIcon className="mr-2 h-4 w-4" />
          <Text className="ml-1 font-semibold text-gray-800">Replace</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-4">
        <Image
          source={{ uri: exercise.gif_asset_url }}
          className="h-64 w-full rounded-lg bg-gray-200"
          resizeMode="contain"
        />

        <View className="absolute bottom-2 left-2 flex-row items-center rounded-full bg-white px-3 py-1.5">
          <Image
            source={{ uri: EquipmentMap[exercise.equipment as keyof typeof EquipmentMap] }}
            className="mr-2 h-5 w-5"
          />
          <Text className="text-sm font-medium text-gray-700">{exercise.equipment}</Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between">
        <ActionButton text="Instructions" onPress={onInstructionsPress}>
          <DocumentIcon className="mr-2 h-4 w-4" />
        </ActionButton>

        <ActionButton text="Warm Up" onPress={onWarmUpPress}>
          <WarmupIcon className="mr-2 h-4 w-4" />
        </ActionButton>

        <ActionButton text="FAQ" onPress={onFAQPress}>
          <QuestionCircleIcon className="mr-2 h-4 w-4" />
        </ActionButton>
      </View>
    </View>
  );
};
