import { StyleSheet } from 'react-native';
import { Colors, Padding } from './variables';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Padding.medium,
  },
  blueAzurColor: {
    color: Colors.blueAzur,
  },
  orangeColor: {
    color: Colors.orange,
  },
});
