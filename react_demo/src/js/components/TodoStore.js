import { EventEmitter } from "events"
import dispatcher from "./dispatcher"

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 10,
        text: "Go Shopping",
      },
      {
        id: 20,
        text: "Pay Bills",
      },
    ];
  }

  addTodo(text) {
    const id = Date.now();
    this.todos.push({
      id,
      text,
    });
    this.emit("change")
  }

  updateTodo(id, text) {
    let targetIndex = this.todos.findIndex(todo => todo.id == id);

    console.log("----");
    console.log(targetIndex);
    console.log("----");

    this.todos.splice(
      targetIndex,
      1,
      {
        id,
        text
      },
    );
    this.emit("change")
  }

  deleteTodo(id) {
    let targetIndex = this.todos.findIndex(todo => todo.id == id);

    console.log("----");
    console.log(targetIndex);
    console.log("----");

    this.todos.splice(
      targetIndex,
      1,
    );
    this.emit("change")
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    console.log("TodoStore received an action", action);
    switch (action.type) {
      case "CREATE_TODO":
        this.addTodo(action.text);
        break;
      case "UPDATE_TODO":
        this.updateTodo(action.id, action.text);
        break;
      case "DELETE_TODO":
        this.deleteTodo(action.id);
        break;
    }
  }
}

const todoStore = new TodoStore;
window.td = todoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dp = dispatcher;
export default todoStore;
