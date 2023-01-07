import Todo from "./Todo";

export enum Priority {
  High,
  Medium,
  Low,
}

export interface AppState {
  todos: Todo[];
}


export const PRIORITY_NAME_MAP : {[key in Priority] : string } = {
  [Priority.High]: '높음',
  [Priority.Medium]: '중간',
  [Priority.Low]: '낮음',
}

export interface ActionNewTodo {
  type: 'newTodo';
  title: string;
  priority: Priority;
}

export type Action = ActionNewTodo; // 나중에 유니온 타입으로 묶을 예정