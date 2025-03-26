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
    <View className="mx-4 my-2 rounded-xl bg-[#FEFEFE] p-4 shadow-sm">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-xl font-bold text-gray-950">{exercise.name}</Text>
        <TouchableOpacity onPress={handleReplace} className="flex-row items-center rounded-full bg-yellow-300 px-4 py-2">
          <ReplaceIcon className="mr-2 h-4 w-4" />
          <Text className="ml-1 text-sm font-semibold text-gray-950">Replace</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-4 rounded-xl border border-gray-100">
        <Image source={{ uri: exercise.gif_asset_url }} className="h-80 w-full rounded-lg" resizeMode="contain" />

        <View className="absolute bottom-2 left-2 flex-row items-center rounded-full border border-[#DFDFDF] bg-gray-100 px-3 py-1.5">
          <Image source={{ uri: EquipmentMap[exercise.equipment as keyof typeof EquipmentMap] }} className="mr-2 h-4 w-4" />
          <Text className="text-xs font-medium text-gray-600">{exercise.equipment}</Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between gap-3">
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
