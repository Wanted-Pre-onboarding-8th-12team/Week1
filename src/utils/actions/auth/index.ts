import { ActionFunctionArgs, redirect } from "react-router-dom";

import { to } from "@/apis";
import { join, login } from "@/apis/auth";
import { IAuthResponse } from "@/typing/auth/index";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const [error, data] = await to<IAuthResponse>(login({ email, password }));

  return data ? redirect("/todo") : null;
};

export const joinAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const [error, data] = await to<IAuthResponse>(join({ email, password }));

  return data ? redirect("/") : null;
};
