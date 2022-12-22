import React from "react";

import { Link } from "react-router-dom";

import { Styled } from "./style";

import Input from "../Input";

interface AuthFormProps {
  mode: "Login" | "Join";
}

export const AuthForm = ({ mode }: AuthFormProps) => {
  if (mode === "Login") return <AuthForm.Login />;
  if (mode === "Join") return <AuthForm.Join />;

  return null;
};

AuthForm.Login = () => {
  return (
    <Styled.Form method='post'>
      <Input type='text' name='email' placeholder='email' />

      <Input type='password' name='password' placeholder='password' />

      <Styled.ButtonWrapper>
        <Styled.Button type='submit' disabled={true}>
          Login
        </Styled.Button>
        <Link to={"/join"}>
          <Styled.Button type='button' variant='outlined'>
            Join
          </Styled.Button>
        </Link>
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
};

AuthForm.Join = () => {
  return (
    <Styled.Form method='post'>
      <Input type='text' name='email' placeholder='email' />

      <Input type='password' name='password' placeholder='password' />

      <Input type='password' name='pw-check' placeholder='password check' />

      <Styled.ButtonWrapper>
        <Styled.Button type='submit' disabled={true}>
          Join
        </Styled.Button>
        <Link to={"/"}>
          <Styled.Button type='button' variant='outlined'>
            Cancel
          </Styled.Button>
        </Link>
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
};
