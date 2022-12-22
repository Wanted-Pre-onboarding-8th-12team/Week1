import { Form } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/common/Button";

import { flexCenter } from "../../../styles/mixin";

export const Styled = {
  Root: styled.div`
    border: 1px solid black;

    padding: 1rem;
  `,

  Form: styled(Form)`
    ${flexCenter()}
  `,

  Button: styled(Button)`
    padding: 1rem 2rem;
    margin-left: 2rem;
  `,
};
