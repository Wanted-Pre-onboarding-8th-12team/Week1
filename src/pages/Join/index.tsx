import React from "react";

import { AuthForm } from "@/components/common/AuthForm";

import { Styled } from "./style";

export const Join = () => {
  return (
    <Styled.Root>
      <Styled.Title>login</Styled.Title>
      <AuthForm mode='Join' />
    </Styled.Root>
  );
};
