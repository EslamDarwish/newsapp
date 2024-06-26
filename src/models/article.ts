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
  id: string;
}
export interface IArticlesData {
  articles: IArticle[];
}
export interface IArticlesResponse extends IArticlesData {}

export interface IArticlesParams {}
