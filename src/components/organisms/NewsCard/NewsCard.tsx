import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {INewsCardProps} from './NewsCard.props';
import {
  StyledCardSpacer,
  StyledNewsCard,
  StyledNewsCardSubtitle,
  StyledNewsCardTitle,
} from './NewsCard.styles';

const NewsCard = ({article}: INewsCardProps) => {
  return (
    <StyledNewsCard>
      <StyledNewsCardTitle>{article.title}</StyledNewsCardTitle>
      <StyledCardSpacer />
      {article.author && (
        <StyledNewsCardSubtitle>by {article.author}</StyledNewsCardSubtitle>
      )}
    </StyledNewsCard>
  );
};

export default memo(NewsCard);
