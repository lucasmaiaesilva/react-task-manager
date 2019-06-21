const initialState = [];

export const todos = (state = initialState, action) => {
  if (action.type === 'ADD_TASK') {
    return [
      action.task,
      ...state,
    ];
  }
  if (action.type === 'UPDATE_TASK') {
    const newState = state.filter(t => t.id !== action.task.id)
      .concat({
        ...action.task,
        status: action.target.checked ? 'Done' : 'To Do'
      })
    return [
      ...newState, 
    ];
  }
  return state;
}

