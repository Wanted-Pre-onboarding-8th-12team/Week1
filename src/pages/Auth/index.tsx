import { useState } from "react";

import { AuthForm } from "@/components/common/AuthForm";

import { Styled } from "./style";

const Auth = () => {
  const [mode, setMode] = useState<"Login" | "Join">("Login");

  const modeHandler = () => {
    if (mode === "Login") setMode("Join");
    if (mode === "Join") setMode("Login");
  };

  return (
    <Styled.Root>
      <Styled.Title>Login</Styled.Title>
      <AuthForm mode={mode} modeHandler={modeHandler} />
    </Styled.Root>
  );
};

export default Auth;
