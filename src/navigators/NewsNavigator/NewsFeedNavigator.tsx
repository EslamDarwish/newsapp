import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IAppParamList} from '../AppNavigator/AppNavigator.types';
import {AppRoutes} from '../AppNavigator/routes';
import {NewsFeed, NewFeed} from '../../screens';

const NewsFeedStack = createNativeStackNavigator<IAppParamList>();
const NewsFeedNavigator = () => {
  return (
    <NewsFeedStack.Navigator
      initialRouteName={AppRoutes.NewsFeed}
      screenOptions={{headerShown: false}}>
      <NewsFeedStack.Screen name={AppRoutes.NewsFeed} component={NewsFeed} />
      <NewsFeedStack.Screen name={AppRoutes.NewFeed} component={NewFeed} />
    </NewsFeedStack.Navigator>
  );
};

export default NewsFeedNavigator;
