import React from 'react';
import useNews from '../../data/useNews';
import {Page} from '../../components/atoms';
import {FlatList} from 'react-native-gesture-handler';
import {NewsCard} from '../../components/organisms/NewsCard';
import {random} from 'lodash';
import {NewsPageContainer} from './NewsFeed.styles';

export default function NewsFeed() {
  const {articles} = useNews();

  return (
    <Page>
      <NewsPageContainer>
        <FlatList
          data={articles}
          renderItem={({item}) => <NewsCard article={item} />}
          keyExtractor={item => random(10000).toString() + item.title}
        />
      </NewsPageContainer>
    </Page>
  );
}
