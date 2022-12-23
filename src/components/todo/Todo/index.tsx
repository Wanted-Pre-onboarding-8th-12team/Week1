import { FormEvent, useState } from "react";

import { TUnPacked } from "@/typing/common";
import { IGetTodoResponse } from "@/typing/todo";
import { dispatch } from "@/utils/actions/todo/withAction";
import useTrigger from "@/utils/hooks/todo/useTrigger";

import { Styled } from "./style";

interface IToDoProps {
  data: TUnPacked<IGetTodoResponse>;
}

interface IChildrenProps {
  data: IToDoProps["data"];
}

const Todo = (props: IToDoProps) => {
  const { data } = props;

  return <Todo.View data={data} />;
};

export default Todo;

Todo.View = (props: IChildrenProps) => {
  const {
    data: { id, todo, isCompleted },
  } = props;

  const [editing, setEditing] = useState(false);
  const trigger = useTrigger();

  const toggleEditing = () => setEditing((prev) => !prev);

  const updateHandler = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const name = (e.target as HTMLInputElement).name;

    if (name !== "checkbox") return;

    dispatch({
      type: "CHECK_TODO",
      payload: { id },
    });

    trigger("put", formData);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    dispatch(
      {
        type: "EDIT_TODO",
        payload: { id },
      },
      { callback: toggleEditing },
    );

    trigger("put", formData);
  };
  const deleteHandler = () => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
    trigger("delete");
  };

  return (
    <Styled.Root>
      <Styled.Form onChange={updateHandler} onSubmit={submitHandler}>
        <Styled.CheckBox name='checkbox' type='checkbox' defaultChecked={isCompleted} />
        <Styled.Input
          name='todo'
          defaultValue={todo}
          readOnly={!editing}
          defaultChecked={isCompleted}
        />

        <Styled.ButtonWrapper>
          {editing && <Styled.Button type='submit'>완료</Styled.Button>}
          {!editing && (
            <Styled.Button onClick={toggleEditing} type='button'>
              수정
            </Styled.Button>
          )}
          {editing && (
            <Styled.Button onClick={toggleEditing} type='button'>
              취소
            </Styled.Button>
          )}
          {!editing && (
            <Styled.Button onClick={deleteHandler} type='button'>
              삭제
            </Styled.Button>
          )}
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Root>
  );
};
