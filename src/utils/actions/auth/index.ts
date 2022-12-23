import { ActionFunctionArgs, redirect } from "react-router-dom";

import { to } from "@/apis";
import { join, login } from "@/apis/auth";
import { AuthResponse } from "@/typing/auth/index";

export async function loginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const [error, data] = await to<AuthResponse>(login({ email, password }));

  return data ? redirect("/todo") : null;
}

export async function joinAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const [error, data] = await to<AuthResponse>(join({ email, password }));

  return data ? redirect("/") : null;
}
