import React from 'react';

// Components
import TodoItem from '../list-item/todoItem';

const todoList = ({ toDosList, toggleTodoStatus, deleteTodo }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        toDosList.length ? 
        toDosList.map(todo => (
            <TodoItem
              todo={todo}
              toggleTodoStatus={toggleTodoStatus}
              deleteTodo={deleteTodo}
              key={todo.id}
            />
          )) : <h2>Empty TODO list. Please create at least one TODO.</h2>
      }
    </ul>
  )
};

export default todoList;
