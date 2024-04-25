import React, {useCallback} from 'react';
import useNews from '../../data/useNews';
import {Page} from '../../components/atoms';
import {FlatList} from 'react-native-gesture-handler';
import {NewsCard} from '../../components/organisms/NewsCard';
import {random} from 'lodash';
import {NewsPageContainer} from './NewsFeed.styles';
import {IArticle} from '../../models/article';

export default function NewsFeed() {
  const {articles} = useNews();

  const renderArticle = useCallback(
    ({item}: {item: IArticle}) => <NewsCard article={item} />,
    [],
  );
  return (
    <Page>
      <NewsPageContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={articles}
          renderItem={renderArticle}
          keyExtractor={item => item.source.id + item.title}
        />
      </NewsPageContainer>
    </Page>
  );
}
