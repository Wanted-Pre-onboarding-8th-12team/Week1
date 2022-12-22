import React from "react";

import { Styled } from "./style";

import Input from "../Input";

interface AuthFormProps {
  mode: "Login" | "Join";
  modeHandler: VoidFunction;
}

export const AuthForm = ({ mode, modeHandler }: AuthFormProps) => {
  return (
    <Styled.Form method='post'>
      <Input type='text' name='email' placeholder='email' />

      <Input type='password' name='password' placeholder='password' />

      {mode === "Join" && <Input type='password' name='pw-check' placeholder='password check' />}

      <Styled.ButtonWrapper>
        <Styled.Button type='submit' disabled={true}>
          Login
        </Styled.Button>
        <Styled.Button type='button' variant='outlined' onClick={modeHandler}>
          {mode === "Join" ? "Cancel" : "Join"}
        </Styled.Button>
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
};
