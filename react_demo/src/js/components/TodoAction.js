import dispatcher from "./dispatcher";

export function addTodo(text) {
  dispatcher.dispatch({
    type:"CREATE_TODO", text
  });
}

export function updateTodo(id, text) {
  dispatcher.dispatch({
    type:"UPDATE_TODO", id, text
  });
}


export function deleteTodo(id) {
  dispatcher.dispatch({
    type:"DELETE_TODO", id
  });
}
