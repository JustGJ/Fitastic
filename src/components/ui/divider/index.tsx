import React from 'react';
import { View } from 'react-native';
import { Colors } from 'styles/variables';

interface DividerProps {
  width?: string;
  height?: number;
  color?: string;
  dividerStyle?: any;
}

const Divider = ({
  width = '100%',
  height = 1,
  color = Colors.whiteSmoke,
  dividerStyle,
}: DividerProps) => {
  const dividerStyles = [
    { width },
    { height },
    { backgroundColor: color },
    dividerStyle,
  ];

  return <View style={dividerStyles} />;
};

export default Divider;
