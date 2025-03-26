import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

export const Container: React.FC<PropsWithChildren> = ({ children }) => (
  <SafeAreaView className={styles.container}>{children}</SafeAreaView>
);

const styles = {
  container: 'flex flex-1 m-6',
};
