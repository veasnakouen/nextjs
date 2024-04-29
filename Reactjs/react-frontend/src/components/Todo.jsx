import React from "react";

const Todo = (props) => {
  const deleteHandler = (e) => [e.preventDefault()];
  return (
    <div className="card bg-yellow-500">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
