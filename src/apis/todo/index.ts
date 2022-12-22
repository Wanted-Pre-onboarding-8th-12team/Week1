import { client, PATH } from "@/apis";

export async function getTodo() {
  const { data } = await client<any>(PATH.GET_TODO);
  return data;
}

export async function deleteTodo(id: any) {
  const { data } = await client.delete<any>(PATH.DELETE_TODO + `/${id}`);
  return data;
}

export async function updateTodo({ id, todo, isCompleted }: any) {
  const { data } = await client.put<any>(PATH.UPDATE_TODO + `/${id}`, {
    isCompleted,
    todo,
  });
  return data;
}
