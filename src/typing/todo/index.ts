interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface GetTodoResponse extends Array<Todo> {}

export interface CreateTodoRequest {
  todo: string;
}
export interface CreateTodoResponse extends Todo {}

export interface UpdateTodoRequest {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export interface UpdateTodoResponse extends Todo {}

export interface DeleteTodoRequest {
  id: number;
}

export interface DeleteTodoResponse {}
