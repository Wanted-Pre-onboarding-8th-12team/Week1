import Input from "@/components/common/Input";

import { Styled } from "./style";

function InputForm() {

  return (
    <Styled.Root>
      <Styled.Form method="post" >
        <Input name="todo" />
        <Styled.Button>추가</Styled.Button>
      </Styled.Form>
    </Styled.Root>
  );
}

export default InputForm;
