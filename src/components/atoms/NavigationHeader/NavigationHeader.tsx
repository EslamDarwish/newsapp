import {useMemo} from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {INavigationHeaderProps} from './NavigationHeader.props';
import {styles} from './NavigationHeader.styles';
import {ExtractProps} from '../../../utils/types';
import {useNavigationOptions} from '../../../hooks/useNavigationOptions';
import {colors} from '../../../constants';

/**
 * @param title The title of the header. Can be a string or a React component.
 * @param headerRight React component to display on the right side of the header.
 * @param headerLeft React component to display on the left side of the header.
 * @param headerTitleContainerStyle Style object for the container of the header title.
 */
const NavigationHeader = (props: ExtractProps<INavigationHeaderProps>) => {
  const navigationOptions =
    useMemo((): Partial<NativeStackNavigationOptions> => {
      return {
        headerTitle:
          typeof props.headerTitle === 'string' ||
          props.headerTitle === undefined
            ? props.headerTitle
            : () => props.headerTitle,
        headerRight: () => props.headerRight,
        headerTitleAlign: 'center',
        headerLeft:
          props.headerLeft === undefined
            ? props.headerLeft
            : () => props.headerLeft,
        headerShown: true,
        headerStyle: props.headerStyle || styles.headerStyle,
        headerShadowVisible: false,
        headerTitleStyle: styles.headerTitleStyle,
      };
    }, [
      props.headerTitle,
      props.headerRight,
      props.headerLeft,
      props.headerStyle,
      props.headerTitleContainerStyle,
    ]);

  useNavigationOptions(navigationOptions);

  return null;
};

export default NavigationHeader;
