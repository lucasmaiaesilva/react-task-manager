import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, updateTask } from './actions';
import logo from './logo.svg';
import Column from './Column';
import './App.css';

class App extends Component {
  componentWillMount() {
    // const toDoListItems = window.localStorage.getItem('toDoListItems') || '[]';
    // this.setState({ tasks: JSON.parse(toDoListItems) });
  }

  updateLocalStorage(items) {
    // window.localStorage.setItem('toDoListItems', JSON.stringify(items));
  }

  addTask = (e) => {
    e.preventDefault();
    const value = e.target.querySelector('input').value;
    const newTask = {
      id: this.props.tarefas.length + 1,
      description: value,
      status: 'To Do'
    }
    this.props.dispatch(addTodo(newTask));
    // tasks = tasks.concat(newTask);
    // this.updateLocalStorage(tasks);
    // this.setState({ tasks });
  }

  updateTask = (target, task) => {
    this.props.dispatch(updateTask(target, task));
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
              tasks={this.props.tarefas}
              updateTask={this.updateTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tarefas: state.todos
})

export default connect(mapStateToProps)(App);
