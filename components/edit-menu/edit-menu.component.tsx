import { View, TouchableOpacity, Text } from 'react-native';

interface EditMenuProps {
  onDiscard?: () => void;
  onSave?: () => void;
}

export const EditMenu: React.FC<EditMenuProps> = ({
  onDiscard = () => null,
  onSave = () => null,
}) => {
  return (
    <View className="w-3/4 flex-row justify-between self-center rounded-full bg-white px-4 py-3">
      <TouchableOpacity onPress={onDiscard} className="rounded-full bg-gray-100 px-6 py-3">
        <Text className="font-medium text-gray-700">Discard</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onSave} className="rounded-full bg-yellow-300 px-6 py-3">
        <Text className="font-medium text-gray-800">Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};
