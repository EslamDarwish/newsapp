import {ApiResponse} from 'apisauce';
import {IObject} from '../utils/types';

export type Payload = IObject;

export type IApiOkResponse = IObject;

export interface IApiErrorResponse {
  meta: {
    code: number;
    message: string;
  };
  data: object | object[];
}

export type IApiResponse = ApiResponse<IApiOkResponse, IApiErrorResponse>;

export enum ResponseProblem {
  TIMEOUT = 'timeout', // Times up.
  CANNOTCONNECT = 'cannot-connect', // Cannot connect to the server for some reason.
  SERVER = 'server', // The server experienced a problem. Any 5xx error.
  UNAUTHORIZED = 'unauthorized', // We're not allowed because we haven't identified ourself. This is 401.
  FORBIDDEN = 'forbidden', // We don't have access to perform that request. This is 403.
  NOTFOUND = 'not-found', // Unable to find that resource.  This is a 404.
  REJECTED = 'rejected', // All other 4xx series errors.
  UNKNOWN = 'unknown', // Something truly unexpected happened. Most likely can try again. This is a catch all.
  BADDATA = 'bad-data', // The data we received is not in the expected format.
  CANCELLED = 'cancelled', // Request is cancelled
}

interface IApiProblem {
  problem: Exclude<ResponseProblem, ResponseProblem.CANCELLED>;
  message?: string;
  temporary?: boolean;
  skipShow?: boolean;
}

export type IGeneralProblem = IApiProblem;

export interface IOkResponse<T> {
  ok: true;
  data?: T;
  statusCode?: number;
}

export type IErrorResponse = IGeneralProblem & {
  ok: false;
  error?: string;
  statusCode?: number;
  errorHeading?: string;
  errorMessage?: string;
  source?: string;
  errorData?: object | object[];
};

export type IResponse<T> = IOkResponse<T> | IErrorResponse;

export type HTTP_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IEndpoint<TData, TResponse> {
  path: string;
  method: HTTP_METHOD;
  data?: TData;
  response?: TResponse;
}

export interface IPayload<T> {
  data: T;
  status: number;
  totalResults: number;
  statusCode: number;
}
