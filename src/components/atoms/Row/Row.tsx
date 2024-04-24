import React from 'react';
import {StyledRow} from './Row.styles';
import {ExtractProps} from '../../../utils/types';

const Row = (props: ExtractProps<typeof StyledRow>) => {
  return <StyledRow {...props} />;
};

export default Row;
