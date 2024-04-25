import React, {useCallback, useEffect, useState} from 'react';
import useNews from '../../data/useNews';
import {Page} from '../../components/atoms';
import {FlatList, RefreshControl} from 'react-native-gesture-handler';
import {NewsCard} from '../../components/organisms/NewsCard';
import {NewsPageContainer} from './NewsFeed.styles';
import {IArticle} from '../../models/article';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {AppRoutes} from '../../navigators/AppNavigator/routes';
import {INewsFeedScreenNavigationProp} from './NewsFeed.props';
import {NavigationHeader} from '../../components/atoms/NavigationHeader';
import {SearchBar} from '../../components/molecules';

export default function NewsFeed() {
  const [isRefresh, setRefresh] = useState(false);
  const [searchString, setSearchString] = useState('');
  const {articles, refetch} = useNews(searchString);
  const navigation = useNavigation<INewsFeedScreenNavigationProp>();
  const renderArticle = useCallback(
    ({item}: {item: IArticle}) => (
      <Pressable
        onPress={() => navigation.navigate(AppRoutes.NewFeed, {article: item})}>
        <NewsCard article={item} />
      </Pressable>
    ),
    [],
  );
  const refetchByUser = useCallback(() => {
    setRefresh(true);
    refetch().then(() => setRefresh(false));
  }, []);

  useEffect(() => {
    refetchByUser();
  }, [searchString]);
  return (
    <Page>
      <NavigationHeader headerTitle="News Feed" />
      <NewsPageContainer>
        <SearchBar
          onTextChange={text => setSearchString(text)}
          debounceTime={200}
        />
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isRefresh} onRefresh={refetchByUser} />
          }
          data={articles}
          renderItem={renderArticle}
          keyExtractor={item => item.id}
        />
      </NewsPageContainer>
    </Page>
  );
}
