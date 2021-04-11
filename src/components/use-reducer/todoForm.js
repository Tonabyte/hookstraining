import React from 'react';

// Hooks
import useForm from '../../hooks/useForm';

const TodoForm = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, clearForm] = useForm({ description: '' });

  const handleSubmit = e => {
    if( description.length ){
      e.preventDefault();
  
      const newTodo = {
        id: new Date().getTime(),
        description,
        done: false,
      };
    
      handleAddTodo(newTodo);
      clearForm();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="Enter your todo"
          autoComplete="off"
          value={description}
          onChange={e => handleInputChange(e)}
        />
        <button className="btn btn-outline-success mt-2 btn-block" type="submit">CREATE</button>
      </form>
    </>
  )
}

export default TodoForm;
