import React from 'react';
import {ExtractProps} from '../../../utils/types';
import {StyledPage} from './Page.styles';

const Page = (props: ExtractProps<typeof StyledPage>): JSX.Element => {
  return <StyledPage {...props}>{props.children}</StyledPage>;
};

export default Page;
