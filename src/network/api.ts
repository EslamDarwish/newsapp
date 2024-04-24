import {ApisauceInstance, CancelToken, create} from 'apisauce';
import axiosRetry from 'axios-retry';
import {AxiosInstance} from 'axios';
import {IApiConfig, DEFAULT_API_CONFIG} from './api.config';
import {getGeneralApiProblem} from './api.errors';
import {IResponse, ResponseProblem, IApiResponse, IEndpoint} from './api.types';
import Config from 'react-native-config';
import {errors} from '../constants/errors';
import {parseParams} from '../utils/api';

export class API {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  private apisauce: ApisauceInstance | null = null;

  /**
   * Configurable options.
   */
  private static config: IApiConfig;

  /**
   * Cancel token.
   */
  public source = CancelToken.source();

  public constructor(config: IApiConfig = DEFAULT_API_CONFIG) {
    API.config = config;
    this.setup();
  }

  public request = async <TData, TResponse>(
    endpoint: IEndpoint<TData, TResponse>,
    payload: {
      data?: TData;
      pathParams?: {[key: string]: string};
      headers?: {};
    },
    token?: string,
  ): Promise<IResponse<TResponse>> => {
    const {path} = endpoint;
    const {data, pathParams} = payload;
    let apiPath = path + `?apiKey=${Config.API_KEY}`;
    let fullPath = pathParams ? parseParams(apiPath, pathParams) : apiPath;
    console.log('fullPath', fullPath);
    token = token || Config.API_TOKEN;
    switch (endpoint.method) {
      case 'GET':
        return await this.get<TResponse>(fullPath, <{}>data);
      case 'POST':
        return await this.post<TData, TResponse>(
          fullPath,
          data,
          payload?.headers,
        );
      case 'PUT':
        return await this.put<TData, TResponse>(fullPath, data);
      case 'DELETE':
        return await this.delete<TResponse>(fullPath, <{}>data);
    }
  };

  private get = async <TResponse>(
    endpoint: string,
    queryParams?: {},
  ): Promise<IResponse<TResponse>> => {
    const response: IApiResponse | undefined = await this.apisauce?.get(
      endpoint,
      queryParams,
      {
        cancelToken: this.source.token,
      },
    );
    return this.handleApiResponse(response);
  };

  private post = async <TData, TResponse>(
    endpoint: string,
    bodyData?: TData,
    headers?: {},
  ): Promise<IResponse<TResponse>> => {
    const response: IApiResponse | undefined = await this.apisauce?.post(
      endpoint,
      bodyData,
      {
        cancelToken: this.source.token,
      },
    );
    return this.handleApiResponse(response);
  };

  private put = async <TData, TResponse>(
    endpoint: string,
    bodyData?: TData,
  ): Promise<IResponse<TResponse>> => {
    const response: IApiResponse | undefined = await this.apisauce?.put(
      endpoint,
      bodyData,
      {
        cancelToken: this.source.token,
      },
    );
    return this.handleApiResponse(response);
  };

  private delete = async <TResponse>(
    endpoint: string,
    params?: {},
  ): Promise<IResponse<TResponse>> => {
    const response: IApiResponse | undefined = await this.apisauce?.delete(
      endpoint,
      params,
      {
        cancelToken: this.source.token,
      },
    );
    return this.handleApiResponse(response);
  };

  public getURL(endpoint: string): string {
    return API.config.url + '/' + endpoint;
  }

  public setURL(baseURL: string): void {
    API.config.url = baseURL;
  }

  public setup(): void {
    const baseURL = DEFAULT_API_CONFIG.url;
    this.apisauce = create({
      baseURL,
      cancelToken: this.source.token,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    // Exponential Back-off Retry Mechanism
    // https://developers.google.com/analytics/devguides/reporting/core/v3/errors#backoff
    axiosRetry(this.apisauce?.axiosInstance as AxiosInstance, {
      retries: 2,
      retryDelay: (retryNumber: number) => {
        const delay = retryNumber * API.config.minimumTimeout;
        return delay;
      },
    });
  }

  private handleApiResponse<TResponse>(
    response?: IApiResponse,
  ): IResponse<TResponse> {
    if (!response?.ok) {
      const problem = getGeneralApiProblem(response);
      return {
        ok: false,
        ...problem,
        error: response?.data?.meta?.message, // backend error message
        statusCode: response?.status,
        errorData: response?.data?.data,
      };
    }
    const data = response?.data as TResponse;
    const statusCode = response?.status;
    return data
      ? {ok: true, data, statusCode}
      : {
          ok: false,
          problem: ResponseProblem.BADDATA,
          message: errors.badDataError,
          temporary: true,
        };
  }
}

export default new API();
