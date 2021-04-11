import React from 'react';

const todoItem = ({ todo, toggleTodoStatus, deleteTodo }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <div className="row">
        <div className="col">
          <p className={todo.done && 'complete'} onClick={() => toggleTodoStatus(todo.id)}>
            <strong>{todo.description}</strong>
          </p>
        </div>
        <div className="col">
          <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>DELETE</button>
        </div>
      </div>
    </li>
  );
}

export default todoItem;
