import {WithLocalSvg} from 'react-native-svg';
import styled from 'styled-components/native';

import {spacing} from '../../../constants';

export const StyledSvg = styled(WithLocalSvg)``;

export const SvgIcon = styled(StyledSvg)({
  width: spacing.md,
});
