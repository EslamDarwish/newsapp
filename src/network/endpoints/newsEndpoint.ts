import {Endpoints} from '../../constants/endpoints';
import {IArticlesParams, IArticlesResponse} from '../../models/article';
import {IEndpoint} from '../api.types';

//getAll
export const newsEndpoint: IEndpoint<IArticlesParams, IArticlesResponse> =
  Object.freeze({
    path: Endpoints.everything,
    method: 'GET',
  });
