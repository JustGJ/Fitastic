import { Colors, fontExtraBold, FontSizes } from 'styles/variables';
import { StyleSheet } from 'react-native';

// screens styles
export const getStarted = StyleSheet.create({
  titleApp: {
    flex: 1,
    position: 'absolute',
    bottom: 120,
    alignSelf: 'center',
  },
});

// components styles
export const titleApp = StyleSheet.create({
  title: {
    fontSize: FontSizes.xxLarge,
    fontWeight: fontExtraBold,
    textAlign: 'center',
    color: Colors.blueAzur,
  },
  description: {
    fontSize: FontSizes.large,
    textAlign: 'center',
    color: Colors.whiteSmoke,
  },
});

export const backgroundImage = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});
