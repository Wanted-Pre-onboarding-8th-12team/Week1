import { SubmitOptions, FormMethod, useSubmit, SubmitFunction } from "react-router-dom";

type Target<T> = T extends (target: infer U) => void ? U : T;

const useTrigger = () => {
  const submit = useSubmit();

  const trigger = (
    method: FormMethod,
    target?: Target<SubmitFunction>,
    options?: SubmitOptions,
  ) => {
    submit(target ?? null, {
      ...options,
      method,
    });
  };

  return trigger;
};

export default useTrigger;
