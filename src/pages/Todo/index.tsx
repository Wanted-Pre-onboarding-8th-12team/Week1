import { useLoaderData } from "react-router-dom";

import { to } from "@/apis";
import { getTodo } from "@/apis/todo";
import InputForm from "@/components/todo/InputForm";
import TodoList from "@/components/todo/TodoList";
import { IGetTodoResponse } from "@/typing/todo";

import { Styled } from "./style";

const Todo = () => {
  const todoList = useLoaderData() as IGetTodoResponse;

  return (
    <Styled.Root>
      <Styled.Title>To Do List</Styled.Title>
      <Styled.Main>
        <InputForm />
        <TodoList todoList={todoList} />
      </Styled.Main>
    </Styled.Root>
  );
};

export default Todo;

export const todoLoader = async () => {
  const [error, data] = await to<IGetTodoResponse>(getTodo());

  return data ?? error;
};
