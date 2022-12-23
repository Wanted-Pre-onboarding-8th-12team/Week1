import React, { memo, ButtonHTMLAttributes, PropsWithChildren } from "react";

import { Styled, Variant } from "./style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const Button = ({ children, ...props }: PropsWithChildren<IButtonProps>) => {
  return (
    <Styled.Button {...props} variant={props.variant ?? "basic"}>
      {children}
    </Styled.Button>
  );
};

export default memo(Button);
