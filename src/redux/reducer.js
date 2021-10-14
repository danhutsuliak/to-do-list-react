import { ActionTypes } from "./actiontypes";
import { getTasksFromlocalStorage } from "./utils";

const INITIAL_STATE = {
  tasks: [...getTasksFromlocalStorage()]
};

const toDoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case ActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default toDoReducer;