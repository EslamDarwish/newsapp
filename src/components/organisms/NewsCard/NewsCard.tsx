import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {INewsCardProps} from './NewsCard.props';
import {
  StyledCardSpacer,
  StyledNewsCard,
  StyledNewsCardImage,
  StyledNewsCardSubtitle,
  StyledNewsCardTitle,
} from './NewsCard.styles';

const NewsCard = ({article}: INewsCardProps) => {
  return (
    <StyledNewsCard>
      {article.urlToImage && (
        <StyledNewsCardImage source={{uri: article.urlToImage}} />
      )}
      <StyledNewsCardTitle>{article.title}</StyledNewsCardTitle>
      <StyledCardSpacer />
      {article.author && (
        <StyledNewsCardSubtitle>by {article.author}</StyledNewsCardSubtitle>
      )}
    </StyledNewsCard>
  );
};

export default memo(NewsCard);
