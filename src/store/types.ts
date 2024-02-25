export interface Task {
  id: string;
  text: string;
}

export enum ActionTypes {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
}

export interface AddTaskAction {
  type: ActionTypes.ADD_TASK;
  payload: Task;
}

export interface DeleteTaskAction {
  type: ActionTypes.DELETE_TASK;
  payload: string;
}

export type Action = AddTaskAction | DeleteTaskAction;
