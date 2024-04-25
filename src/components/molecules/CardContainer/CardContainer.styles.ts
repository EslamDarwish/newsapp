import styled from 'styled-components/native';
import {View} from '../../atoms';
import {colors, radius, spacing} from '../../../constants';

export const StyledCardContainer = styled(View)`
  border-radius: ${radius.md}px;
  padding: ${spacing.md}px;
  border-width: 1px;
  border-color: ${colors.bg[300]};
  border-style: solid;
  margin-bottom: ${spacing.md}px;
`;
