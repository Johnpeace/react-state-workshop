import React from "react";
import PropTypes from "prop-types";

import "./todo.style.css";
import DeleteImg from "../../assets/delete.png";
import DoneImg from "../../assets/done.png";

const Todo = ({
  task: { description, id, done },
  handleDone,
  handleDelete,
}) => {
  return (
    <div className="row">
      <div className="col-md-8">
        <span className={done ? "done" : "not-done"}>{description}</span>
      </div>
      <div className="col-md-1 justify-content-center">
        <img
          style={{ width: `25px` }}
          src={DeleteImg}
          alt="edit"
          onClick={() => handleDelete(id)}
        />
      </div>
      <div className="col-md-1 justify-content-center">
        <img
          style={{ width: `25px` }}
          src={DoneImg}
          alt="done"
          onClick={() => handleDone(id)}
        />
      </div>
    </div>
  );
};

Todo.propTypes = {
  description: PropTypes.string,
  id: PropTypes.number,
  done: PropTypes.bool
}

export default Todo;
