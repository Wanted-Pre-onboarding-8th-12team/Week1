import React, { PropsWithChildren } from "react";

import { Form as RouterForm } from "react-router-dom";

import { Styled } from "./style";

type Unpacked<T> = T extends React.ForwardRefExoticComponent<infer U> ? U : T;

const Form = ({ children, ...props }: PropsWithChildren<Unpacked<typeof RouterForm>>) => {
  return <Styled.Form {...props}>{children}</Styled.Form>;
};

export default Form;
