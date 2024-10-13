import { TouchableOpacity, View, Animated, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { Colors } from 'styles/variables';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { buttonAddMenuAnimated } from 'styles';

interface ButtonAddMenuAnimatedProps {
  onPress: () => void;
}

const items = [
  { id: 1, title: 'Ajouter un échauffement', translateY: -80 },
  { id: 2, title: 'Ajouter un exercice', translateY: -140 },
  { id: 3, title: 'Ajouter un superset', translateY: -200 },
];

const ButtonAddMenuAnimated = ({ onPress }: ButtonAddMenuAnimatedProps) => {
  const [open, setOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 7,
      useNativeDriver: true,
    }).start();
    setOpen(!open);
  };

  const getAnimatedStyle = (translateY: number) => ({
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, translateY],
        }),
      },
    ],
  });

  const renderItemsMenu = () =>
    items.map((item, index) => (
      <TouchableOpacity key={index} onPress={onPress}>
        <Animated.View
          style={[
            buttonAddMenuAnimated.button,
            buttonAddMenuAnimated.secondary,
            getAnimatedStyle(item.translateY),
          ]}>
          <Text style={buttonAddMenuAnimated.text}>{item.title}</Text>
        </Animated.View>
      </TouchableOpacity>
    ));

  return (
    <View style={buttonAddMenuAnimated.container}>
      {renderItemsMenu()}
      <TouchableOpacity onPress={toggleMenu}>
        <Animated.View style={[buttonAddMenuAnimated.button, buttonAddMenuAnimated.menu, rotation]}>
          <Ionicons name="add-sharp" size={40} color={Colors.white} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonAddMenuAnimated;
