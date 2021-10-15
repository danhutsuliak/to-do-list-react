import React from 'react';
import { addTask } from '../../redux/actions';
import { connect } from 'react-redux';

import './add-task-form.styles.scss';

const AddTaskForm = ({ addTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formInputValue = event.target.firstChild.value;

    if (!formInputValue) {
      return;
    }

    let id = localStorage.length;

    for (let i = 0; i <= localStorage.length; i++) {
      if (!localStorage[i]) {
        id = i;
        break;
      }
    }

    const task = {
      id: id,
      text: formInputValue,
    };

    console.log(localStorage);
    localStorage.setItem(task.id, task.text);
    addTask(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="task" placeholder="New task" />
      <button type="submit">Add</button>
    </form>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);
