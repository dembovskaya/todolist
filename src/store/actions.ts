import { ActionTypes, AddTaskAction, DeleteTaskAction } from "./types";

export const addTask = (text: string): AddTaskAction => ({
  type: ActionTypes.ADD_TASK,
  payload: { id: Date.now().toString(), text },
});

export const deleteTask = (id: string): DeleteTaskAction => ({
  type: ActionTypes.DELETE_TASK,
  payload: id,
});
