import { ApiResponse } from "apisauce";

import { Store } from "@src/application";

import { ApiError, ErrorResponse } from "./error";

export const checkUnauthorized = <T>(response: ApiResponse<T, ErrorResponse>) => {
  if (response.ok) {
    return response.data as T;
  }
  if (response.status === 401) {
    Store.store.clearSession();
  }
  throw new ApiError(response);
};
