import { useContext } from "react";
import { useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div classNameName="container text-center">
      <div classNameName="row kg-row">
        <div classNameName="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div classNameName="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
