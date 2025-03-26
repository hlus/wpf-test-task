import { FC, PropsWithChildren } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
}

export const ActionButton: FC<PropsWithChildren<Props>> = ({ text, onPress, children }) => (
  <TouchableOpacity
    onPress={onPress}
    className="mx-1 flex-1 flex-row items-center justify-center rounded-full border border-gray-200 bg-white py-2">
    {children}
    <Text className="ml-1 text-sm font-medium text-gray-700">{text}</Text>
  </TouchableOpacity>
);
