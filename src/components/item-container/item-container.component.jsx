import React from "react";
import { connect } from "react-redux";
import Item from "../item/item.component";

import "./item-container.styles.scss";

const ItemContainer = ({ tasks }) => {
  const noTasksText = "Your To Do List is empty. Make a task with form below!";

  return (
    <div className="item-container">
      {!tasks.length
        ? noTasksText
        : tasks.map((task) => (
            <Item key={task.id} text={task.text} taskId={task.id} />
          ))}
    </div>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

export default connect(mapStateToProps)(ItemContainer);
