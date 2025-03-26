import { StyleSheet, Platform, ScrollView, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.stepContainer}>
        <Text>Step 1: Try it</Text>
        <Text>
          Edit <Text className="font-bold">app/(tabs)/index.tsx</Text> to see changes. Press{' '}
          <Text className="font-bold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text>Step 2: Explore</Text>
        <Text>Tap the Explore tab to learn more about what's included in this starter app.</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text>Step 3: Get a fresh start</Text>
        <Text>
          When you're ready, run <Text className="font-bold">npm run reset-project</Text> to get a
          fresh <Text className="font-bold">app</Text> directory. This will move the current{' '}
          <Text className="font-bold">app</Text> to <Text className="font-bold">app-example</Text>.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
