import React, { Component } from 'react';
import logo from './logo.svg';
import Column from './Column';
import './App.css';

class App extends Component {
  state = {
    tasks: []
  }

  componentWillMount() {
    const toDoListItems = window.localStorage.getItem('toDoListItems') || '[]';
    this.setState({ tasks: JSON.parse(toDoListItems) });
  }

  updateLocalStorage(items) {
    window.localStorage.setItem('toDoListItems', JSON.stringify(items));
  }

  addTask = (e) => {
    e.preventDefault();
    let { tasks } = this.state;
    const value = e.target.querySelector('input').value;
    const newTask = {
      id: tasks.length + 1,
      description: value,
      status: 'To Do'
    }
    tasks = tasks.concat(newTask);
    this.updateLocalStorage(tasks);
    this.setState({ tasks });
  }

  updateTask = (target, task) => {
    let { tasks } = this.state;
    tasks = tasks.filter(t => t.id !== task.id).concat({
      ...task,
      status: target.checked ? 'Done': 'To Do'
    })
    this.updateLocalStorage(tasks);
    this.setState({ tasks });
  }
  
  render() {
    const columns = [
      {title: 'To Do', tasks: []},
      {title: 'Done', tasks: []}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Task Manager
          </p>
        </header>
        <div className="columns-container">
          {columns.map(column => (
            <Column
              key={column.title}
              columnTitle={column.title}
              addTask={this.addTask}
              tasks={this.state.tasks}
              updateTask={this.updateTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
