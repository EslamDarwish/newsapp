import {useLayoutEffect} from 'react';
import {
  NavigationProp,
  NavigationState,
  ParamListBase,
  useNavigation,
} from '@react-navigation/core';

function useNavigationOptionsFunc<
  P extends ParamListBase,
  R extends keyof P,
  Options,
  // @ts-ignore: TODO: fix me
  T extends NavigationProp<P, R, NavigationState<P>, Options>,
>(navigation: T, options: Partial<Options>) {
  useLayoutEffect(() => {
    navigation.setOptions(options);
  }, [navigation, options]);
}

function useNavigationOptions<
  P extends ParamListBase,
  R extends keyof P,
  Options,
  // @ts-ignore: TODO: fix me
  T extends NavigationProp<P, R, NavigationState<P>, Options>,
>(options: Partial<Options>) {
  const navigation = useNavigation<T>();
  //@ts-ignore TODO: check why the type isn't inferred
  useNavigationOptionsFunc(navigation, options);
  return navigation;
}

export {useNavigationOptionsFunc, useNavigationOptions};
