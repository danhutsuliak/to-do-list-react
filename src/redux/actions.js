import { ActionTypes } from "./actiontypes";

export const addTask = (task) => ({
  type: ActionTypes.ADD_TASK,
  payload: task
})