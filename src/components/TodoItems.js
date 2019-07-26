import React, { Component } from "react";
import todoItemsStyles from "../styles/todoItems.module.css";

const TodoItems = props => {
  return (
    <div className={todoItemsStyles.todoItems}>
      {props.individualItems}
      { props.individualItems && <button
        className={todoItemsStyles.removeButton}
        onClick={e => {
          props.handleRemoveOneItem(props.individualItems);
        }}
      >
        Remove
      </button>}
    </div>
  );
};

export default TodoItems;
