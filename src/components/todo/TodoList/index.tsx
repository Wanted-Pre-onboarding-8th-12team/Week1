import Todo from "@/components/todo/Todo";
import { IGetTodoResponse } from "@/typing/todo";

import { Styled } from "./style";

interface ITodoListProps {
  todoList: IGetTodoResponse;
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
