import {StyleSheet} from 'react-native';
import {colors, spacing} from '../../../constants';

export const styles = StyleSheet.create({
  headerLeftContainer: {
    paddingLeft: spacing.smsm as number,
  },
  headerRightContainer: {
    paddingLeft: spacing.smsm as number,
  },
  headerStyle: {
    backgroundColor: colors.primary['200'],
  },
  headerTitleStyle: {
    color: colors.white['100'],
  },
});
