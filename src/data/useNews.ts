// to get new using useQuery from react-query

import {useQuery} from '@tanstack/react-query';
import API from '../network/api';
import {IArticlesParams, IArticlesResponse} from '../models/article';
import {newsEndpoint} from '../network';

const getNews = async () => {
  const response = await API.request<IArticlesParams, IArticlesResponse>(
    newsEndpoint,
    {
      data: {
        q: 'tesla',
      },
    },
  );
  if (response.ok) {
    return response;
  }
};
const useNews = () => {
  const query = useQuery({queryKey: ['articles'], queryFn: getNews});
  return {
    ...query,
    articles: query?.data?.data?.articles,
  };
};

export default useNews;
