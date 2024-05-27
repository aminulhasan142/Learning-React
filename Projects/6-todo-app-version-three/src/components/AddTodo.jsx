import { useState, useRef } from "react";
import { IoMdAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div classNameName="container text-center">
      <form classNameName="row kg-row" onSubmit={handleAddButtonClicked}>
        <div classNameName="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
          />
        </div>
        <div classNameName="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div classNameName="col-2">
          <button type="submit" classNameName="btn btn-success kg-button">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
