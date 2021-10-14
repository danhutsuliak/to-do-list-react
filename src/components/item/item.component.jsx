import React from "react";

import { ReactComponent as Cross } from "../../assets/cross.svg";
import "./item.styles.scss";

const Item = ({ text }) => {
  const handleChange = (event) => {
    event.target.parentNode.children[1].classList.toggle("checked");
  };

  return (
    <div className="item">
      <input type="checkbox" onChange={handleChange} />
      <span className="task-text">{text}</span>
      <button>
        <Cross />
      </button>
    </div>
  );
};

export default Item;
