import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { defaultStyles } from 'styles/globals';
import { Colors } from 'styles/variables';

interface LinearGradientBackgroundProps {
  children: React.ReactNode;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

export const LinearGradientBackground = ({
  children,
  colors = [Colors.white, Colors.blueAzurLight],
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
}: LinearGradientBackgroundProps) => (
  <LinearGradient colors={colors} style={styles.gradient} start={start} end={end}>
    <View style={defaultStyles.container}>{children}</View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
