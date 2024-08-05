import { StyleSheet } from 'react-native';
import { Colors, Padding } from './variables';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: Padding.medium,
    backgroundColor: Colors.black,
  },
});
