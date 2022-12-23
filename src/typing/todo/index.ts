interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface IGetTodoResponse extends Array<ITodo> {}

export interface ICreateTodoRequest {
  todo: string;
}
export interface ICreateTodoResponse extends ITodo {}

export interface IUpdateTodoRequest {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export interface IUpdateTodoResponse extends ITodo {}

export interface IDeleteTodoRequest {
  id: number;
}

export interface IDeleteTodoResponse {}
