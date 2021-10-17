import React from "react";
import ToDo from "./ToDo";

const ToDoList = (props) => {
  return (
    <div>
      {props.toDoList.map((todo) => {
        return <ToDo todo={todo} />;
      })}
    </div>
  );
};

export default ToDoList;
