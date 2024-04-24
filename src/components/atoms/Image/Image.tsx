import React from 'react';
import {StyledFitImage, StyledImage} from './Image.styles';
import {ExtractProps} from '../../../utils/types';

export const Image = (props: ExtractProps<typeof StyledImage>) => {
  return <StyledImage {...props} />;
};
export const FitImage = (props: ExtractProps<typeof StyledFitImage>) => {
  return <StyledFitImage {...props} />;
};
export const StyledFitCoverImage = (
  props: ExtractProps<typeof StyledFitImage>,
) => {
  return <StyledFitImage {...props} />;
};
