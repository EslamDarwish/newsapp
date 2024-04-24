import {IPayload} from '../network';

export interface IArticle {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface IArticlesData {
  articles: IArticle[];
}
export interface IArticlesResponse extends IPayload<IArticlesData> {}

export interface IArticlesParams {}
