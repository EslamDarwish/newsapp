import styled from 'styled-components/native';
import {CardContainer} from '../../molecules';
import {colors, fontSizes, fontWeights, spacing} from '../../../constants';
import {Image} from '../../atoms';
import {StyledCardContainer} from '../../molecules/CardContainer/CardContainer.styles';

export const StyledNewsCard = styled(StyledCardContainer)``;

export const StyledNewsCardTitle = styled.Text`
  font-size: ${fontSizes.md}px;
  color: ${colors.primary[800]};
`;

export const StyledNewsCardSubtitle = styled.Text`
  font-size: ${fontSizes.sm}px;
  font-weight: ${fontWeights.regular};
  color: ${colors.muted[800]};
`;
export const StyledNewsCardImage = styled(Image)``;

export const StyledCardSpacer = styled.View`
  height: ${spacing.sm}px;
`;
