import React from "react";

import { Link } from "react-router-dom";

import useAuthForm from "@/utils/actions/hooks/common/useAuthForm";

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
  const {
    value: { email, password },
    handlers: { emailHandler, pwHandler },
    validate: { isError, errors },
  } = useAuthForm();

  return (
    <Styled.Form method='post'>
      <Input type='text' name='email' placeholder='email' value={email} onChange={emailHandler} />
      <Styled.Error>{errors.email}</Styled.Error>

      <Input
        type='password'
        name='password'
        placeholder='password'
        value={password}
        onChange={pwHandler}
      />
      <Styled.Error>{errors.password}</Styled.Error>

      <Styled.ButtonWrapper>
        <Styled.Button type='submit' disabled={isError}>
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
  const {
    value: { email, password, pwCheck },
    handlers: { emailHandler, pwHandler, pwCheckHandler },
    validate: { isError, errors },
  } = useAuthForm();

  return (
    <Styled.Form method='post'>
      <Input type='text' name='email' placeholder='email' value={email} onChange={emailHandler} />
      <Styled.Error>{errors.email}</Styled.Error>

      <Input
        type='password'
        name='password'
        placeholder='password'
        value={password}
        onChange={pwHandler}
      />
      <Styled.Error>{errors.password}</Styled.Error>

      <Input
        type='password'
        name='pw-check'
        placeholder='password check'
        value={pwCheck}
        onChange={pwCheckHandler}
      />
      <Styled.Error>{errors.pwCheck}</Styled.Error>

      <Styled.ButtonWrapper>
        <Styled.Button type='submit' disabled={isError}>
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
