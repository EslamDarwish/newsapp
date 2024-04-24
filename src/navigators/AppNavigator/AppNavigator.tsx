import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {NewsFeedNavigator} from '../NewsNavigator';
import {IAppParamList} from './AppNavigator.types';

const AppNavigator = () => {
  return (
    <NavigationContainer<IAppParamList>>
      <NewsFeedNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
