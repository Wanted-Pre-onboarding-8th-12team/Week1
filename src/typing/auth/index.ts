import { TModifyToString } from "../common";

export interface IAuth {
  email?: FormDataEntryValue | null;
  password?: FormDataEntryValue | null;
  pwCheck?: FormDataEntryValue | null;
}

export type TResult<T> = { isError: boolean; errors: TModifyToString<T> };

export interface IValidator {
  auth: (data: IAuth) => TResult<IAuth>;
}

export interface IAuthRequest {
  email: string;
  password: string;
}

export interface IAuthResponse {
  access_token: string;
}
