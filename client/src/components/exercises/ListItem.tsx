import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import { Colors } from 'styles/variables';
import { useTranslation } from 'react-i18next';
import { exercises } from 'styles';

interface ListItemProps {
  item: any;
  isTarget: boolean;
  onPress: () => void;
}

const ListItem = ({ item, isTarget, onPress }: ListItemProps) => {
  const { t } = useTranslation();
  const displayText = isTarget ? t(item) : t(item.name);
  const imageSource = isTarget ? require('assets/images/epaule-target.png') : { uri: item.image };

  return (
    <TouchableOpacity style={exercises.targetContainer} onPress={onPress}>
      <View style={exercises.imageContainer}>
        <Image source={imageSource} resizeMode="cover" style={exercises.targetImage} />
      </View>
      <Text style={exercises.title}>{displayText}</Text>
      {/* <Feather style={exercises.chevron} name="chevron-right" size={20} color={Colors.blueAzur} /> */}
    </TouchableOpacity>
  );
};

export default ListItem;
