import styled from 'styled-components/native';
import {colors, fontSizes, fontWeights, spacing} from '../../../constants';
import {Image} from '../../atoms';
import {StyledCardDetailsContainer} from '../../molecules/CardDetailsContainer/CardDetailsContainer.styles';
import {StyledFitCoverImage} from '../../atoms/Image/Image.styles';

export const StyledNewsCardDetails = styled(StyledCardDetailsContainer)`
  flex: 1;
`;

export const StyledNewsCardDetailsTitle = styled.Text`
  font-size: ${fontSizes.lg}px;
  color: ${colors.primary[100]};
  padding-horizontal: ${spacing.md}px;
  padding-top: ${spacing.md}px;
  font-weight: ${fontWeights.bold};
  text-align: center;
`;
export const StyledNewsCardDetailsDescription = styled.Text`
  font-size: ${fontSizes.md}px;
  color: ${colors.primary[200]};
  padding-horizontal: ${spacing.md}px;
`;

export const StyledNewsCardDetailsDate = styled.Text`
  text-align: center;
  font-size: ${fontSizes.sm}px;
  padding-bottom: ${spacing.md}px;
  color: ${colors.primary[400]};
`;
export const StyledNewsCardImage = styled(StyledFitCoverImage)`
  height: 40%;
  margin-bottom: ${spacing.sm}px;
  width: 100%;
`;

export const StyledNewsCardDetailsSubtitle = styled.Text`
  font-size: ${fontSizes.sm}px;
  font-weight: ${fontWeights.regular};
  color: ${colors.muted[800]};
  padding-horizontal: ${spacing.md}px;
  padding-top: ${spacing.smsm}px;
`;
