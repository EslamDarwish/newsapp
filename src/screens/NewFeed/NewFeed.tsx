import React from 'react';
import {Page} from '../../components/atoms';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {INewsFeedRoutePropRouteProp} from './NewFeed.props';
import {NavigationHeader} from '../../components/atoms/NavigationHeader';
import {NewsCardDetails} from '../../components/organisms';

export default function NewFeed() {
  const {params} = useRoute<INewsFeedRoutePropRouteProp>();
  const {article} = params || {};
  return (
    <Page>
      <NavigationHeader headerTitle={article.title} />
      <NewsCardDetails article={article} />
    </Page>
  );
}
