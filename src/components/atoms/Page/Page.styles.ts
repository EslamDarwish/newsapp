import styled from 'styled-components/native';
import {colors} from '../../../constants/colors';
import {IPageProps} from './Page.props';
import {View} from '../View';
import {spacing} from '../../../constants';

export const StyledPage = styled(View)<IPageProps>({
  flex: 1,
  height: '100%',
  width: '100%',
  backgroundColor: colors.bg['200'],
});
