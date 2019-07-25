import React, { Component } from "react";

const TodoItems = props => {
  return (
    <div>
      {props.individualItems}
      <button
        onClick={e => {
          props.handleRemoveOneItem(props.individualItems);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItems;
