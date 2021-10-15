import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Cross } from '../../assets/cross.svg';
import { deleteTask } from '../../redux/actions';
import './task.styles.scss';

const Task = ({ text, deleteTask, taskId }) => {
  const handleChange = (event) => {
    event.target.parentNode.children[1].classList.toggle('checked');
  };

  const handleClick = () => {
    const task = {
      id: taskId,
      text: text,
    };

    localStorage.removeItem(task.id);
    deleteTask(task);
  };

  return (
    <div className="task">
      <input type="checkbox" onChange={handleChange} />
      <span className="task-text">{text}</span>
      <button onClick={handleClick}>
        <Cross />
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (task) => dispatch(deleteTask(task)),
});

export default connect(null, mapDispatchToProps)(Task);
