import React from 'react';
import {ExtractProps} from '../../../utils/types';
import {StyledCardDetailsContainer} from './CardDetailsContainer.styles';

const CardDetailsContainer = (
  props: ExtractProps<typeof StyledCardDetailsContainer>,
) => {
  return <StyledCardDetailsContainer {...props} />;
};

export default CardDetailsContainer;
