import { ActionFunctionArgs, SubmitFunction } from "react-router-dom";

type TExtract<T> = T extends (args: infer U, options?: infer R) => void ? U & R : T;

type TTaskType = "EDIT_TODO" | "CHECK_TODO" | "CREATE_TODO" | "DELETE_TODO";

interface IDispatchOptions {
  callback?: VoidFunction;
  trigger?: () => SubmitFunction | void;
}
interface IDispatch {
  (
    { type, payload }: { type: TTaskType; payload?: { [index: string | number]: any } },
    options?: IDispatchOptions,
  ): void;
}

interface ITask extends TExtract<IDispatch> {}

let taskList: ITask[] = [];

const clear = () => (taskList = []);

export const dispatch: IDispatch = ({ type, payload }, options) => {
  let callback: IDispatchOptions["callback"];
  let trigger: IDispatchOptions["trigger"];

  if (options?.callback) callback = options.callback;
  if (options?.trigger) trigger = options.trigger;

  taskList.push({ type, payload, callback });
  trigger?.();
};

export const withAction = (action: Function) => {
  return async (args: ActionFunctionArgs) => await action(args);
};

export const consume = async (callback: (task: ITask) => Promise<unknown>) => {
  for (const task of taskList) {
    await callback(task);
    task.callback?.();
  }

  clear();

  return null;
};
