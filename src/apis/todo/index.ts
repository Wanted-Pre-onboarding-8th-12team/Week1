import { client, PATH } from "@/apis";
import {
  IDeleteTodoRequest,
  IDeleteTodoResponse,
  IUpdateTodoRequest,
  IUpdateTodoResponse,
} from "@/typing/todo";
import { ICreateTodoRequest, ICreateTodoResponse } from "@/typing/todo";
import { IGetTodoResponse } from "@/typing/todo";

export const getTodo = async () => {
  const { data } = await client<IGetTodoResponse>(PATH.GET_TODO);

  return data;
};

export const createTodo = async (payload: ICreateTodoRequest) => {
  const { data } = await client.post<ICreateTodoResponse>(PATH.CREATE_TODO, payload);

  return data;
};

export const updateTodo = async ({ id, todo, isCompleted }: IUpdateTodoRequest) => {
  const { data } = await client.put<IUpdateTodoResponse>(`${PATH.UPDATE_TODO}/${id}`, {
    todo,
    isCompleted,
  });

  return data;
};

export const deleteTodo = async ({ id }: IDeleteTodoRequest) => {
  const { data } = await client.delete<IDeleteTodoResponse>(`${PATH.DELETE_TODO}/${id}`);

  return data;
};
