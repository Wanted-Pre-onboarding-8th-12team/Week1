// import { useEffect, useState } from "react";

// import { to } from "@/apis";
// import { getTodo } from "@/apis/todo";

import Todo from "@/components/todo/Todo";
import { GetTodoResponse } from "@/typing/todo";

import { Styled } from "./style";



interface ITodoListProps {
  todoList: GetTodoResponse;
}


const TodoList = (props: ITodoListProps) =>  {
  const { todoList } = props;
  // const [todoList, setTodoList] = useState([]); //여기

  // const getTodoList = async () => {
  //   const [error, data] = await to<any>(getTodo());
  //   setTodoList(data);
  //   /* error 처리 */
  // };
  // console.log(todoList);
  // useEffect(() => {
  //   getTodoList();
  // }, []);
  return (
    <Styled.Root>
      {todoList.map((data: any) => (
        <Todo key={data.id} data={data} />
      ))}
    </Styled.Root>
  );
}

export default TodoList;
