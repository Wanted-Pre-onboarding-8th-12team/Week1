import { ActionFunctionArgs } from "react-router-dom";

import { to } from "@/apis";
import { createTodo, deleteTodo, updateTodo } from "@/apis/todo";

import { consume } from "./withAction";

export async function todoAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const todo = formData.get("todo") as string;
  const isCompleted = Boolean(formData.get("checkbox") as string);

  return consume(async ({ type, payload }) => {
    switch (type) {
      case "CREATE_TODO": {
        return to(createTodo({ todo }));
      }
      case "EDIT_TODO": {
        return to(
          updateTodo({
            id: payload?.id,
            todo,
            isCompleted,
          })
        );
      }
      case "CHECK_TODO": {
        return to(
          updateTodo({
            id: payload?.id,
            todo,
            isCompleted,
          })
        );
      }

      case "DELETE_TODO": {
        return to(deleteTodo({ id: payload?.id }));
      }

      default:
        return null;
    }
  });
}