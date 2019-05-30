import React from 'react'
import If from './If' 

const Column = ({ columnTitle, addTask, updateTask, tasks }) => {
  const filteredTasks = tasks.filter(task => columnTitle === task.status)
  return (
    <div className="column">
      <h3>{columnTitle}</h3>
      <If test={columnTitle === 'To Do'}>
        <form onSubmit={addTask}>
          <input type="text" />
          <button type="submit">
            Criar tarefa
          </button>
        </form>
      </If>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.status === 'Done'}
              onChange={e => updateTask(e.target, task)}
            />
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  )
} 

export default Column
