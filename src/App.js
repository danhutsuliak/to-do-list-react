import TaskList from './components/task-list/task-list-container.component';
import './App.css';

import React from 'react';
import AddTaskForm from './components/add-task-form/add-task-form.component';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <h1>To Do List</h1>
        <TaskList />
        <AddTaskForm />
      </div>
    );
  }
}

export default App;
