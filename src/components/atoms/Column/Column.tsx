import React from 'react';
import {StyledColumn} from './Column.styles';
import {ExtractProps} from '../../../utils/types';

const Column = (props: ExtractProps<typeof StyledColumn>) => {
  return <StyledColumn {...props} />;
};

export default Column;
