import { StyleSheet, Platform, View, Text, ScrollView } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text className="text-2xl font-bold">Explore</Text>
      </View>
      <Text>This app includes example code to help you get started.</Text>
      <Collapsible title="File-based routing">
        <Text>
          This app has two screens: <Text className="font-bold">app/(tabs)/index.tsx</Text> and{' '}
          <Text className="font-bold">app/(tabs)/explore.tsx</Text>
        </Text>
        <Text>
          The layout file in <Text className="font-bold">app/(tabs)/_layout.tsx</Text> sets up the
          tab navigator.
        </Text>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <Text className="text-blue-500">Learn more</Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <Text>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <Text className="font-bold">w</Text> in the terminal running this project.
        </Text>
      </Collapsible>
      <Collapsible title="Images">
        <Text>
          For static images, you can use the <Text className="font-bold">@2x</Text> and{' '}
          <Text className="font-bold">@3x</Text> suffixes to provide files for different screen
          densities
        </Text>
        <ExternalLink href="https://reactnative.dev/docs/images">
          <Text className="text-blue-500">Learn more</Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <Text>
          Open <Text className="font-bold">app/_layout.tsx</Text> to see how to load{' '}
          <Text style={{ fontFamily: 'SpaceMono' }}>custom fonts such as this one.</Text>
        </Text>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <Text className="text-blue-500">Learn more</Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <Text>
          This template has light and dark mode support. The{' '}
          <Text className="font-bold">useColorScheme()</Text> hook lets you inspect what the user's
          current color scheme is, and so you can adjust UI colors accordingly.
        </Text>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <Text className="text-blue-500">Learn more</Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <Text>
          This template includes an example of an animated component. The{' '}
          <Text className="font-bold">components/HelloWave.tsx</Text> component uses the powerful{' '}
          <Text className="font-bold">react-native-reanimated</Text> library to create a waving hand
          animation.
        </Text>
        {Platform.select({
          ios: (
            <Text>
              The <Text className="font-bold">components/ParallaxScrollView.tsx</Text> component
              provides a parallax effect for the header image.
            </Text>
          ),
        })}
      </Collapsible>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
