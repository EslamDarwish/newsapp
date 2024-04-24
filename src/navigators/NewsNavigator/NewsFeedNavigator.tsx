import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IAppParamList} from '../AppNavigator/AppNavigator.types';
import {AppRoutes} from '../AppNavigator/routes';

const NewsFeedStack = createNativeStackNavigator<IAppParamList>();
const NewsFeedNavigator = () => {
  return (
    <NewsFeedStack.Navigator
      initialRouteName={AppRoutes.NewsFeed}
      screenOptions={{headerShown: false}}>
      <NewsFeedStack.Screen name={AppRoutes.NewsFeed} component={() => null} />
      <NewsFeedStack.Screen name={AppRoutes.NewFeed} component={() => null} />
    </NewsFeedStack.Navigator>
  );
};

export default NewsFeedNavigator;
