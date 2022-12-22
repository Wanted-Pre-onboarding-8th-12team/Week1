import { useEffect, useState } from "react";

import { to } from "@/apis";
import { getTodo } from "@/apis/todo";
import ToDo from "@/components/todo/Todo";

import { Styled } from "./style";

function ToDoList() {
  const [todoList, setTodoList] = useState([]); //여기

  const getTodoList = async () => {
    const [error, data] = await to<any>(getTodo());
    setTodoList(data);
    /* error 처리 */
  };
  console.log(todoList);
  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <Styled.Root>
      {todoList.map((data: any) => (
        <ToDo key={data.id} data={data} getTodoList={getTodoList} />
      ))}
    </Styled.Root>
  );
}

export default ToDoList;
