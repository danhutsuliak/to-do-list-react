export const getTasksFromlocalStorage = () => {
  let tasks = [];
  for (const key in localStorage) {
    if (typeof localStorage[key] == 'string') {
      const task = {
        id: key,
        text: localStorage.getItem(key)
      }

      tasks.push(task);
    }
  }

  return tasks;
}