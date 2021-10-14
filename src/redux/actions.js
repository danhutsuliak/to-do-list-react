import { ActionTypes } from "./actiontypes";

export const addTask = (task) => ({
  type: ActionTypes.ADD_TASK,
  payload: task
})

export const deleteTask = (task) => ({
  type: ActionTypes.DELETE_TASK,
  payload: task
})