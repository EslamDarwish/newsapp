import React, {memo} from 'react';
import {INewsCardDetailsProps} from './NewsCardDetails.props';
import {
  StyledNewsCardDetails,
  StyledNewsCardDetailsDate,
  StyledNewsCardDetailsDescription,
  StyledNewsCardDetailsSubtitle,
  StyledNewsCardDetailsTitle,
  StyledNewsCardImage,
} from './NewsCardDetails.styles';
import {Column, Row} from '../../atoms';

const NewsCardDetails = ({article}: INewsCardDetailsProps) => {
  return (
    <StyledNewsCardDetails>
      {article.urlToImage && (
        <StyledNewsCardImage source={{uri: article.urlToImage}} />
      )}

      <StyledNewsCardDetailsTitle>{article.title}</StyledNewsCardDetailsTitle>
      <StyledNewsCardDetailsDate>
        {article.publishedAt}
      </StyledNewsCardDetailsDate>
      <StyledNewsCardDetailsDescription>
        {article.description}
      </StyledNewsCardDetailsDescription>
      {article.author && (
        <Column>
          <StyledNewsCardDetailsSubtitle>
            by {article.author}
          </StyledNewsCardDetailsSubtitle>
          {article?.source?.name && (
            <StyledNewsCardDetailsSubtitle>
              {article.source.name}
            </StyledNewsCardDetailsSubtitle>
          )}
        </Column>
      )}
    </StyledNewsCardDetails>
  );
};

export default memo(NewsCardDetails);
