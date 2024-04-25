import React from 'react';
import {ExtractProps} from '../../../utils/types';
import {StyledCardContainer} from './CardContainer.styles';

const CardContainer = (props: ExtractProps<typeof StyledCardContainer>) => {
  return <StyledCardContainer {...props} />;
};

export default CardContainer;
