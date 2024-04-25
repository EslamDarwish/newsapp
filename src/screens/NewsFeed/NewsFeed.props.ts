import {AppRoutes} from '../../navigators/AppNavigator/routes';
import {
  INewsFeedNavigationProp,
  INewsFeedRouteProp,
} from '../../navigators/NewsNavigator/NewsFeedNavigator.props';

export type INewsFeedScreenNavigationProp =
  INewsFeedNavigationProp<AppRoutes.NewsFeed>;
