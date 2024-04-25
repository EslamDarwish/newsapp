import {useMemo} from 'react';
// to get new using useQuery from react-query

import {useQuery} from '@tanstack/react-query';
import API from '../network/api';
import {IArticlesParams, IArticlesResponse} from '../models/article';
import {newsEndpoint} from '../network';

const getNews = async (searchString?: string) => {
  const response = await API.request<IArticlesParams, IArticlesResponse>(
    newsEndpoint,
    {
      data: {
        q: !!searchString ? searchString : 'apple',
      },
    },
  );
  if (response.ok) {
    return response;
  }
  return null;
};

const useNews = (searchString?: string) => {
  const query = useQuery({
    queryKey: ['articles'],
    queryFn: () => getNews(searchString),
  });
  const proccesed = useMemo(
    () => query?.data?.data?.articles?.filter(article => article.author),
    [query.data],
  );
  // key data with random id
  proccesed?.forEach((article, index) => {
    article.id = index.toString();
  }, 0);
  return {
    ...query,
    articles: proccesed,
  };
};

export default useNews;
