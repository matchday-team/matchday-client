import ky from 'ky';

import { FETCH_OPTIONS } from '@/constants';

type HttpStatusValues = 200 | 201 | 204 | 400 | 401 | 403 | 404 | 500;

export const HttpStatus: Record<string, HttpStatusValues> = {
  Ok: 200,
  Created: 201,
  NoContent: 204,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  InternalServerError: 500,
};

export interface ApiResponse<Payload = object> {
  status: HttpStatusValues;
  data: Payload;
  message: string;
}

export const http = ky.create({
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
  timeout: FETCH_OPTIONS.timeout,
  retry: FETCH_OPTIONS.retry,
});
