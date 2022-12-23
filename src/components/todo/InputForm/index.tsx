import Input from "@/components/common/Input";
import { dispatch } from "@/utils/actions/todo/withAction";

import { Styled } from "./style";

function InputForm() {
  const submitHandler = () => dispatch({ type: "CREATE_TODO" });

  return (
    <Styled.Root>
      <Styled.Form method='post' onSubmit={submitHandler}>
        <Input name='todo' />
        <Styled.Button>추가</Styled.Button>
      </Styled.Form>
    </Styled.Root>
  );
}

export default InputForm;
