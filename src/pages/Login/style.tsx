import styled from "styled-components";

import { flexCenter } from "@/styles/mixin";

export const Styled = {
  Root: styled.div`
    ${flexCenter("column")}

    padding: 1rem;
  `,

  Title: styled.header`
    font-size: 2.5rem;

    text-align: center;
  `,
};
