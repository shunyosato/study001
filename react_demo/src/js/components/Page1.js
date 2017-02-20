import * as TodoAction from "./TodoAction"
import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import TodoStore from "./TodoStore";

export default class Page1 extends React.Component {

  constructor(){
    super();
    this.state = {
      addValue: 'hoge',
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

  render() {
    const {todos} = this.state;
    console.log('*******' + this.addTodo);
    console.log('+++++++++'+ todos);

    return (
      <div>
        <input type="text"  value={this.state.addValue} onChange={this.addTodo} />
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
