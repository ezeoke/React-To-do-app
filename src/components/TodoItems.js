import React, { Component } from "react";

const TodoItems = (props) => {
 return (
  <div>
   {props.individualItems}
   <button onClick={props.handleRemoveOneItem}>Remove</button>
  </div>
 )
}

export default TodoItems;
