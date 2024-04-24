import styled from 'styled-components/native';
import {IImageProps} from './Image.props';

export const StyledImage = styled.Image<IImageProps>``;

export const StyledFitImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: center;
`;
export const StyledFitCoverImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const StyledBackgroundImage = styled(StyledImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
