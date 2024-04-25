import {IArticle} from '../../models/article';

export type IAppParamList = {
  NewsFeed: undefined;
  NewFeed: {article: IArticle};
};
