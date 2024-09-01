import { useAuth } from 'contexts/AuthContext';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { dashboardHeader } from 'styles';
import { Colors, FontSizes } from 'styles/variables';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonIcon from './ui/buttons/ButtonIcon';

const DashboardHeader = () => {
  const { currentUser } = useAuth();

  const renderImageProfileUser = () => {
    const source = require('assets/images/user-profile.jpg');
    return (
      <Image
        resizeMode="cover"
        source={source}
        style={dashboardHeader.profileImage}
      />
    );
  };

  return (
    <View style={dashboardHeader.container}>
      <ButtonIcon
        backgroundColor="transparent"
        icon={renderImageProfileUser()}
      />
      <Text style={dashboardHeader.welcome}>Salut {currentUser?.name} 👋</Text>
      <ButtonIcon
        customStyles={dashboardHeader.notifications}
        backgroundColor="transparent"
        colorPressable={Colors.greyLight}
        icon={<Ionicons name="notifications-outline" size={FontSizes.xLarge} />}
      />
    </View>
  );
};

export default DashboardHeader;
