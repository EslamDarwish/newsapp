import React from 'react';
import {IViewProps} from './View.types';
import {StyledView} from './View.styles';

export const View = (props: IViewProps) => {
  return <StyledView>{props.children}</StyledView>;
};
export default View;
