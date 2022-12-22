
import { client, PATH } from "@/apis";

export async function getTodo() {
  const { data } = await client<any>(PATH.GET_TODO);
  return data;
}
