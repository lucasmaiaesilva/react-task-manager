export const addTodo = newTask => {
  return {
    type: 'ADD_TASK',
    task: newTask
  }
}

export const updateTask = (target, task) => {
  return {
    type: 'UPDATE_TASK',
    task,
    target,
  }
}
