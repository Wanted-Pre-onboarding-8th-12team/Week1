import Todo from "@/components/todo/Todo";
import { GetTodoResponse } from "@/typing/todo";

import { Styled } from "./style";

interface ITodoListProps {
  todoList: GetTodoResponse;
}

const TodoList = (props: ITodoListProps) => {
  const { todoList } = props;

  return (
    <Styled.Root>
      {todoList.map((data: any) => (
        <Todo key={data.id} data={data} />
      ))}
    </Styled.Root>
  );
};

export default TodoList;
