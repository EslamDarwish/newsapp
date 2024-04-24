import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../../constants/colors';
import {IPageProps} from './Page.props';

export const StyledPage = styled(SafeAreaView)<IPageProps>({
  flex: 1,
  height: '100%',
  width: '100%',
  backgroundColor: colors.bg['500'],
});
