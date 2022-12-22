import { useState, useRef } from "react";

import { to } from "@/apis";
import { deleteTodo, updateTodo } from '@/apis/todo';

import { Styled } from "./style";

function Todo(props: any) {
  const { getTodoList,data } = props;
  const [readOnly, setReadOnly] = useState(true);
  const [todoData, setTodoData] = useState({id: data.id, todo: data.todo, isCompleted: data.isCompleted})
  
  const textContent: any = {
    저장  : async () => { 
      const [error, response] = await to<any>(updateTodo(todoData)); // payload 추가하기(value)
      if (error) {
        alert("update failed");
      } else {
        setTodoData(prev=> ({...prev,todo:response.todo}));
      }
    },
    삭제: async () => {
      await deleteTodo(data.id);
      await getTodoList();
    }, /* page에 있어도 됩니다. */
    취소: () => {
      setTodoData(prev=> ({...prev,todo:data.todo}));
      //기존 글자 넣어주기
      // react Memo 쓰면 가능할거같긴함 삭제 => 딜리트 로직 => 겟데이터
    },
    수정 : () => {
      // update
      // setvalue(response);
    },
  };

  const onClickModifyHandler = (e: any) => {
    textContent[e.target.textContent]();
    setReadOnly(!readOnly);
  };

  const valueHandler = (e:any) =>{
    setTodoData(prev=> ({...prev,todo:e.target.value}));
  }

  return (
    <Styled.Root>
      <Styled.Form>
        <Styled.CheckBox name='checkbox' type='checkbox' />
        <Styled.Input name='todo' value={todoData.todo} onChange={valueHandler} readOnly={readOnly} />
        <Styled.ButtonWrapper>
          <Styled.Button type='button' onClick={onClickModifyHandler}>
            {readOnly ? "수정" : "저장"}
          </Styled.Button>

          <Styled.Button type='button' onClick={onClickModifyHandler}>
            {readOnly ? "삭제" : "취소"}
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Root>
  );
}

export default Todo;
