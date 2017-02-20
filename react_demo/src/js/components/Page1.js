import * as TodoAction from "./TodoAction"
import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import TodoStore from "./TodoStore";

export default class Page1 extends React.Component {

  constructor(){
    super();
    this.state = {
      addValue: '',
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll(),
      });
    });
  }

  componentDidMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll(),
      });
    });
  }

  addTodo = (event) => {
    this.setState({ addValue: event.target.value });
  }

  addAction = (event) => {
    TodoAction.addTodo(this.state.addValue);
  }
  render() {
    const {todos} = this.state;
    console.log('+++++++++'+ todos);

    return (
      <div>
        <input type="text"  value={this.state.addValue} onChange={this.addTodo} />
        <button onClick={this.addAction}>Add</button>
        <h3>My Todo List</h3>
        <ul>
          {todos.map((todo) =>
            <Todo key={todo.id} {...todo}>
            </Todo>
          )}
        </ul>
      </div>
    );
  }
}
