import { ActionTypes, Action, Task } from "./types";

const initialState: Task[] = [];

const reducer = (state: Task[] = initialState, action: Action): Task[] => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return [...state, action.payload];
    case ActionTypes.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
