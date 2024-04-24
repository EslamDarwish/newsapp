import {ApiResponse} from 'apisauce';

import {IGeneralProblem, ResponseProblem} from './api.types';
import {errors} from '../constants/errors';

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem<T, U>(
  response?: ApiResponse<T, U>,
): IGeneralProblem {
  switch (response?.problem) {
    case 'CONNECTION_ERROR':
    case 'NETWORK_ERROR':
      return {
        problem: ResponseProblem.CANNOTCONNECT,
        message: errors.networkError,
        temporary: true,
      };
    case 'TIMEOUT_ERROR':
      return {
        problem: ResponseProblem.TIMEOUT,
        message: errors.requestTimeout,
        temporary: true,
      };
    case 'SERVER_ERROR':
      return {
        problem: ResponseProblem.SERVER,
        message: errors.serverError,
      };
    case 'UNKNOWN_ERROR':
      return {
        problem: ResponseProblem.UNKNOWN,
        message: errors.generalError,
        temporary: true,
      };
    case 'CLIENT_ERROR':
      switch (response.status) {
        case 401:
          return {
            problem: ResponseProblem.UNAUTHORIZED,
            message: errors.unauthorizedError,
          };
        case 403:
          return {
            problem: ResponseProblem.FORBIDDEN,
            message: errors.forbiddenError,
          };
        case 404:
          return {
            problem: ResponseProblem.NOTFOUND,
            message: errors.resourceNotFound,
          };
        default:
          return {
            problem: ResponseProblem.REJECTED,
            message: errors.rejectError,
          };
      }
  }
  return {
    problem: ResponseProblem.UNKNOWN,
    message: errors.generalError,
  };
}
