import { useEffect, useState } from "react";

import { to } from "@/apis";
import { getTodo } from "@/apis/todo";
import InputForm from "@/components/todo/InputForm";
import ToDoList from "@/components/todo/TodoList";

import { Styled } from "./style";

function ToDo() {
  const [todoList, setTodoList] = useState([]); //여기
  const getData = async () => {
    const [error, data] = await to<any>(getTodo());
    setTodoList(data);

    console.log(error);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Styled.Root>
      <Styled.Title>To Do List</Styled.Title>
      <Styled.Main>
        <InputForm />
        <ToDoList toDoList={todoList} />
      </Styled.Main>
    </Styled.Root>
  );
}

export default ToDo;
