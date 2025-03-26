import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const WorkoutPlanner = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
        {exercises.map((exercise, index) => (
          <View
            key={index}
            className={`mr-4 h-16 w-16 items-center justify-center rounded-full bg-gray-100
              ${exercise.isSelected ? 'border-2 border-yellow-400' : ''}`}>
            <Image
              source={{ uri: exercise.image }}
              className="h-12 w-12 rounded-full"
              resizeMode="contain"
            />
            {exercise.isCompleted && (
              <View className="absolute bottom-0 right-0 rounded-full bg-green-500 p-1">
                <Text className="text-xs text-white">✓</Text>
              </View>
            )}
          </View>
        ))}
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

const exercises = [
  {
    image:
      'https://jyfpzydnxyelsxofxcnz.supabase.co/storage/v1/object/public/exercise_gifs/1080/143513.png',
    isCompleted: true,
    isSelected: false,
  },
  {
    image:
      'https://jyfpzydnxyelsxofxcnz.supabase.co/storage/v1/object/public/exercise_gifs/1080/143513.png',
    isCompleted: true,
    isSelected: false,
  },
  {
    image:
      'https://jyfpzydnxyelsxofxcnz.supabase.co/storage/v1/object/public/exercise_gifs/1080/143513.png',
    isCompleted: false,
    isSelected: true,
  },
  {
    image:
      'https://jyfpzydnxyelsxofxcnz.supabase.co/storage/v1/object/public/exercise_gifs/1080/143513.png',
    isCompleted: false,
    isSelected: false,
  },
  {
    image:
      'https://jyfpzydnxyelsxofxcnz.supabase.co/storage/v1/object/public/exercise_gifs/1080/143513.png',
    isCompleted: false,
    isSelected: false,
  },
];
