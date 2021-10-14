import React from "react";
import { connect } from "react-redux";
import Item from "../item/item.component";

import "./item-container.styles.scss";

const ItemContainer = ({ tasks }) => {
  return (
    <div className="item-container">
      {tasks.map((task) => (
        <Item key={task.id} text={task.text} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

export default connect(mapStateToProps)(ItemContainer);
