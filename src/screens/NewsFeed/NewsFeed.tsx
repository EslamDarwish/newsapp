import {Text, View} from 'react-native';
import React from 'react';
import useNews from '../../data/useNews';
import {Page} from '../../components/atoms';

export default function NewsFeed() {
  const {articles} = useNews();

  return (
    <Page>
      <Text>{JSON.stringify(articles)}</Text>
    </Page>
  );
}
