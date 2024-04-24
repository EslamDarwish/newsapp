import {View as RNView} from 'react-native';
import React from 'react';
import {IViewProps} from './View.types';

export const View = (props: IViewProps) => {
  return <RNView>{props.children}</RNView>;
};
export default View;
