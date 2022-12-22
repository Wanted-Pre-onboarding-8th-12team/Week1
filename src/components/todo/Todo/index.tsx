import { useState } from "react";

import { Styled } from "./style";

function Todo(props: any) {
  const { data } = props;
  const [readOnly, setReadOnly] = useState(true);
  const textContent: any = {
    저장: () => {},
    삭제: () => {},
    수정: () => {},
  };

  const onClickModifyHandler = (e: any) => {
    textContent[e.target.textContent];
    setReadOnly(!readOnly);
  };

  return (
    <Styled.Root>
      <Styled.Form>
        <Styled.CheckBox name='checkbox' type='checkbox' />
        <Styled.Input name='todo' defaultValue={data.todo} readOnly={readOnly} />
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
