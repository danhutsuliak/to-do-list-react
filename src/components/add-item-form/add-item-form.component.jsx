import React from "react";
import { addTask } from "../../redux/actions";
import { connect } from "react-redux";

import "./add-item-form.styles.scss";

const AddItemForm = ({ addTask, tasks }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let id = localStorage.length;

    for (let i = 0; i <= localStorage.length; i++) {
      if (!localStorage[i]) {
        id = i;
        break;
      }
    }

    const task = {
      id: id,
      text: event.target.firstChild.value,
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

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm);
