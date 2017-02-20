import React from "react";
import * as TodoAction from "./TodoAction"
import ReactDOM from "react-dom";
import TodoStore from "./TodoStore";

export default class Todo extends React.Component {

  deleteTodo(event) {
    let id = this.props.id
    TodoAction.deleteTodo(id);
  }

  updateTodo(event){
    let id = this.props.id
    let text = ReactDOM.findDOMNode(this.refs.updateValue).value.trim();
    TodoAction.updateTodo(id, text);
    ReactDOM.findDOMNode(this.refs.updateValue).value = "";
  }

  render() {
    const { complete, text } = this.props;

    return (
      <li>
        <span>{complete}</span>
        <input type="text" placeholder={text} ref="updateValue" />
        <button onClick={this.updateTodo.bind(this)}>Update</button>
        <button onClick={this.deleteTodo.bind(this)}>Delete</button>
        <span>=>{text}</span>

      </li>
    );
  }
}
