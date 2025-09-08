import { uiChanger } from "./ui-changer.js";

let todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
// ...existing code...
export function getTodos() {
  return todos;
}

export function changeTodos(value) {
  todos = value;
  localStorage.setItem("todos", JSON.stringify(todos));
  uiChanger(todos);
}
