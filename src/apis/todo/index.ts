import { client, PATH } from "@/apis";
import {
  DeleteTodoRequest,
  DeleteTodoResponse,
  UpdateTodoRequest,
  UpdateTodoResponse,
} from "@/typing/todo";
import { CreateTodoRequest, CreateTodoResponse } from "@/typing/todo";
import { GetTodoResponse } from "@/typing/todo";

export const getTodo = async () => {
  const { data } = await client<GetTodoResponse>(PATH.GET_TODO);

  return data;
};

export const createTodo = async (payload: CreateTodoRequest) => {
  const { data } = await client.post<CreateTodoResponse>(PATH.CREATE_TODO, payload);

  return data;
};

export const updateTodo = async ({ id, todo, isCompleted }: UpdateTodoRequest) => {
  const { data } = await client.put<UpdateTodoResponse>(`${PATH.UPDATE_TODO}/${id}`, {
    todo,
    isCompleted,
  });

  return data;
};

export const deleteTodo = async ({ id }: DeleteTodoRequest) => {
  const { data } = await client.delete<DeleteTodoResponse>(`${PATH.DELETE_TODO}/${id}`);

  return data;
};
