import React, { PropsWithChildren } from "react";

import { Navigate } from "react-router-dom";

interface IAuthProps {
  to: string;
  login: boolean;
}

const Auth = (props: PropsWithChildren<IAuthProps>): JSX.Element => {
  const { children, to, login } = props;
  const user = localStorage.getItem("user");

  if (login && user) return <Navigate to={to} replace />;
  if (!login && !user) return <Navigate to={to} replace />;

  return <>{children}</>;
};

export default Auth;
