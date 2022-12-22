import styled from "styled-components";

import Button from "@/components/common/Button";
import Form from "@/components/common/Form";

export const Styled = {
  Form: styled(Form)`
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 40rem;
    height: 40rem;
  `,

  Error: styled.div`
    height: 4rem;
    line-height: 4rem;

    font-size: 1.5rem;

    color: red;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    width: 25rem;

    margin-top: 3rem;

    & > button:first-child {
      margin-right: 1rem;
    }

    & > * {
      width: 100%;
    }
  `,

  Button: styled(Button)`
    width: 100%;
    padding: 1rem 0;
  `,
};
