import React from "react";
import * as TodoAction from "./TodoAction"
import ReactDOM from "react-dom";
import TodoStore from "./TodoStore";

export default class Todo extends React.Component {

  constructor() {
  super();
  this.state = {
    updateValue: '',
  };
}

  deleteAction = (event) => {
    TodoAction.deleteTodo(this.props.id);
  }

  updateTodo = (event) => {
    this.setState({ updateValue: event.target.value});
  }

  updateAction = (event) => {
    TodoAction.updateTodo(this.props.id, this.state.updateValue);
    this.setState({
      updateValue: ''
    })
  }

  render() {
    const { complete, text } = this.props;

    return (
      <li>
        <span>{complete}</span>
        <input type="text" placeholder={text} value={this.state.updateValue}  onChange={this.updateTodo} />
        <button onClick={this.updateAction}>Update</button>
        <button onClick={this.deleteAction}>Delete</button>
        <span>=>{text}</span>
      </li>
    );
  }
}
