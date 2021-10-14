import React from "react";
import { addTask } from "../../redux/actions";
import { connect } from "react-redux";

import "./add-item-form.styles.scss";

const AddItemForm = ({ addTask, tasks }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    for (let i = 0; i <= tasks.length; i++) {
      const task = {
        id: !tasks[i] ? i : tasks.length,
        text: event.target.firstChild.value,
      };

      addTask(task);
      break;
    }
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
