import { ChangeEvent, useCallback } from "react";
import { useState } from "react";

const useInput = (
  initial: string = "",
): [string, ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<string>(initial);

  const inputHandler = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  }, []);

  return [value, inputHandler];
};

export default useInput;
