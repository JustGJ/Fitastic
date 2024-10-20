import { View } from 'react-native';
import React from 'react';
import { card } from 'styles';

interface ICardProps {
  children: React.ReactNode;
}

const Card = ({ children }: ICardProps) => <View style={card.container}>{children}</View>;

export default Card;
