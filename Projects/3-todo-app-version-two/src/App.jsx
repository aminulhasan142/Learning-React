import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },

    {
      name: "Go to College",
      dueDate: "4/10/23",
    },
    {
      name: "finish react",
      dueDate: "10/5/23",
    },
  ];
  return (
    <center classNameName="todo-container">
      <AppName />
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
