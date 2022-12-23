import { useEffect } from "react";
import { useState } from "react";

import { AUTH } from "@/constants/auth";
import { IAuth, TResult, IValidator } from "@/typing/auth";

import useInput from "../common/useInput";

export const validator: IValidator = {
  auth: ({ email, password, pwCheck = "" }: IAuth) => {
    const result: TResult<IAuth> = { isError: false, errors: {} };

    if (typeof email !== "string" || (!email.includes("@") && email !== "")) {
      result.errors.email = AUTH.EMAIL;
    }

    if (typeof password !== "string" || (password.length < 8 && password !== "")) {
      result.errors.password = AUTH.PW;
    }

    if (typeof pwCheck !== "string" || (password !== pwCheck && pwCheck !== "")) {
      result.errors.pwCheck = AUTH.PW_CHECK;
    }

    if (Object.keys(result.errors).length) {
      result.isError = true;
    }

    return result;
  },
};

const useAuthForm = () => {
  const [email, emailHandler] = useInput();
  const [password, pwHandler] = useInput();
  const [pwCheck, pwCheckHandler] = useInput();

  const [validate, setValidate] = useState<TResult<IAuth>>({
    isError: false,
    errors: {},
  });

  useEffect(() => {
    const validate = validator.auth({ email, password, pwCheck });

    setValidate(validate);
  }, [email, password, pwCheck]);

  return {
    value: { email, password, pwCheck },
    handlers: { emailHandler, pwHandler, pwCheckHandler },
    validate,
  };
};

export default useAuthForm;
