import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnBoardingStack from './src/navigations/OnBoardingStack';

const App = () => {
  return (
    <NavigationContainer>
      <OnBoardingStack />
    </NavigationContainer>
  );
};

export default App;
