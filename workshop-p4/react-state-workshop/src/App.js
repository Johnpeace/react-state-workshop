import React, { Component } from "react";
import "./App.css";

import TodoList from './components/todo-list/todo-list.component';
import AddTask from './components/add-task/add-task.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: 1,
          description: "Buy Tabac !",
          done: false,
        },
        {
          id: 2,
          description: "Buy more Tabac !",
          done: false,
        },
        {
          id: 3,
          description: "Save the world !",
          done: false,
        },
      ],
    };
  }

  addTask = (task) => this.setState({ tasks: [...this.state.tasks, task] });
  doneTask = (id) =>
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    });
  deleteTask = (id) =>
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });

    render() {
      return (
        <div className='container'>
          <div className='row justify-content-center'>
            <h1>Here is a list of what you should do</h1>
          </div>
          <TodoList 
            todos={this.state.tasks}
            handleDelete={this.deleteTask}
            handleDone={this.doneTask}
          />
          <AddTask handleAdd={this.addTask} />
        </div>
      )
    }
}

export default App;
