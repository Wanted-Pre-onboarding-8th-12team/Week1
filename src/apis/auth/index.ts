import { client, PATH } from "@/apis/index";
import { IAuthRequest, IAuthResponse } from "@/typing/auth/index";

export const join = async ({ email, password }: IAuthRequest) => {
  const { data } = await client.post<IAuthResponse>(PATH.JOIN, {
    email,
    password,
  });

  return data;
};

export const login = async ({ email, password }: IAuthRequest) => {
  const { data } = await client.post<IAuthResponse>(PATH.LOGIN, {
    email,
    password,
  });

  localStorage.setItem("user", data.access_token);
  client.defaults.headers["Authorization"] = `Bearer ${data.access_token}`;

  return data;
};
