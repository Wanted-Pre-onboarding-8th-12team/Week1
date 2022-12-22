import ToDo from "@/components/todo/Todo";

import { Styled } from "./style";

function ToDoList(props: any) {
  const { toDoList } = props;
  return (
    <Styled.Root>
      {toDoList.map((data: any) => (
        <ToDo key={data.id} data={data} />
      ))}
    </Styled.Root>
  );
}

export default ToDoList;
