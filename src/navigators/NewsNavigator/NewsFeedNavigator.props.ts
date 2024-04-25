import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IAppParamList} from '../AppNavigator/AppNavigator.types';
import {RouteProp} from '@react-navigation/native';

export type INewsFeedRoute = keyof IAppParamList;
export type INewsFeedNavigationProp<R extends INewsFeedRoute> =
  NativeStackNavigationProp<IAppParamList, R>;
export type INewsFeedRouteProp<R extends INewsFeedRoute> = RouteProp<
  IAppParamList,
  R
>;
