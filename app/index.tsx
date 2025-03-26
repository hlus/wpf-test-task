import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { WorkoutCircle } from '@/components/workout-circle/workout-circle.component';
import ExercisesMock from '@/mock/exercises-response.json';
import { Exercise } from '@/models/exercise.dto';

const WorkoutPlanner = () => {
  const exercises = ExercisesMock.exercises;
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  const onSelectExercise = (id: number) => setSelectedExercise(id);

  const renderExerciseCircle = (exercise: Exercise) => (
    <WorkoutCircle
      key={exercise.id}
      exercise={exercise}
      isSelected={exercise.id === selectedExercise}
      onSelect={onSelectExercise}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
        {exercises.map(renderExerciseCircle)}
      </ScrollView>

      <View className="p-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-2xl font-bold">Inclined Bench Press</Text>
          <TouchableOpacity className="rounded-full bg-yellow-300 px-4 py-2">
            <Text>Replace</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 rounded-xl bg-gray-50 p-6">
          {/* <Image
            source={require('./assets/incline-bench-press.png')} // You'll need to add your own image
            className="h-48 w-full"
            resizeMode="contain"
          /> */}
          <View className="mt-2 flex-row items-center">
            {/* <Image
              source={require('./assets/dumbbell-icon.png')} // You'll need to add your own icon
              className="h-5 w-5"
            /> */}
            <Text className="ml-2 text-gray-600">Dumbbell</Text>
          </View>
        </View>

        {/* Bottom Buttons */}
        <View className="mt-4 flex-row justify-between">
          <TouchableOpacity className="rounded-full border border-gray-300 px-6 py-3">
            <Text>Instructions</Text>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full border border-gray-300 px-6 py-3">
            <Text>Warm Up</Text>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full border border-gray-300 px-6 py-3">
            <Text>FAQ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WorkoutPlanner;
