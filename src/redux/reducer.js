import { ActionTypes } from "./actiontypes";

const INITIAL_STATE = {
  tasks: [{ id: 0, text: "Task 1" }, { id: 1, text: "Task 2" }, { id: 2, text: "Task 3" }]
};

const toDoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    default:
      return state;
  }
}

export default toDoReducer;