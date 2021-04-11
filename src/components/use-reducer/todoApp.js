import React, { useReducer, useEffect } from 'react';

// Reducers
import todoReducer from './todoReducer';

// Components
import TodoForm from './todoForm';
import TodoList from '../list/todoList';

// Styles
import './todoAppStyles.css';

const init = () => (JSON.parse(localStorage.getItem('todos')) || []);

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const deleteTodo = todo => {
    const action = {
      type: 'DELETE_TODO',
      payload: todo,
    };

    dispatch(action);
  }

  const toggleTodoStatus = id => {
    const action = {
      type: 'TOGGLE_TODO',
      payload: id,
    };

    dispatch(action);
  }

  const handleAddTodo = todo => {
    const action = {
      type: 'CREATE_TODO',
      payload: todo,
    };
  
    dispatch(action);
  }

  return (
    <div>
      <h1>CRUD with useReducer</h1>
      <div className="row col-3">
        <TodoForm handleAddTodo={handleAddTodo} />
      </div>
      <div className="row mt-5">
        <TodoList
          toDosList={todos}
          toggleTodoStatus={toggleTodoStatus}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
};

export default TodoApp;
