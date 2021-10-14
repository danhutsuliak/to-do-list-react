export const getTasksFromlocalStorage = () => {
  let tasks = [];
  for (let i = 0; i < localStorage.length; i++) {
    const task = {
      id: i,
      text: localStorage.getItem(i)
    }

    tasks.push(task);
  }

  return tasks;
}