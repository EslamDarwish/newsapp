import styled from 'styled-components/native';
import {Row} from '../../atoms';
import {colors, radius, spacing} from '../../../constants';

export const StyledSearchBar = styled(Row)`
  align-items: center;
  padding-horizontal: ${spacing.md}px;
  height: 60px;
  margin-vertical: ${spacing.sm}px;
  border-radius: ${radius.md}px;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${colors.bg['300']};
`;
