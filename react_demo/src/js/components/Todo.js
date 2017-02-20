import React from "react";
import * as TodoAction from "./TodoAction"
import ReactDOM from "react-dom";
import TodoStore from "./TodoStore";

export default class Todo extends React.Component {

  constructor() {
  super();
  this.state = {
    updateValue: '',
    index: 0,
  };
}

  deleteTodo = (event) => {
    let id = this.props.id;
    TodoAction.deleteTodo(id);
  }

  updateTodo =(event) => {
    let id = this.setState({ index: event.target.value });
    let text = this.setState({ updateValue: event.target.value });
    console.log("¥ " + event);
    TodoAction.updateTodo(id, text);
  }

  render() {
    const { complete, text } = this.props;

    return (
      <li>
        <span>{complete}</span>
        <input type="text" placeholder={text} value={this.state.updateValue} onChange={this.updateTodo} />
        <button onClick={this.updateTodo}>Update</button>
        <button onClick={this.deleteTodo}>Delete</button>
        <span>=>{text}</span>

      </li>
    );
  }
}
