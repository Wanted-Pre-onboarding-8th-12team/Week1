import React from "react";

import { AuthForm } from "@/components/common/AuthForm";

import { Styled } from "./style";

export const Login = () => {
  return (
    <Styled.Root>
      <Styled.Title>login</Styled.Title>
      <AuthForm mode='Login' />
    </Styled.Root>
  );
};
