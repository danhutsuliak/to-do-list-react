import React from 'react';
import { connect } from 'react-redux';
import Task from '../task/task.component';

import './task-list.styles.scss';

const TaskList = ({ tasks }) => {
  const noTasksText = 'Your To Do List is empty. Make a task with form below!';

  return (
    <div className="task-list">
      {!tasks.length
        ? noTasksText
        : tasks.map((task) => (
            <Task key={task.id} text={task.text} taskId={task.id} />
          ))}
    </div>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

export default connect(mapStateToProps)(TaskList);
