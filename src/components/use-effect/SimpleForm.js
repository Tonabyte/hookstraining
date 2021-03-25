import React, { useEffect } from 'react'

// Hooks
import useForm from '../../hooks/useForm';

const SimpleForm = () => {
  const [formState, handleInputChange] = useForm({
    name: '',
    email: '',
  });
  const { name, email } = formState;

  useEffect(() => {
    console.log('Email has changed.');
  }, [email]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Use Effect Hook Component</h1>
      <hr/>
      <div className="form-group">
        <input
          name="name"
          placeholder="Enter your name"
          className="form-control"
          onChange={e => handleInputChange(e)}
          autoComplete="off"
          value={name}
        />
        <input
          name="email"
          placeholder="Enter your email"
          className="form-control"
          onChange={e => handleInputChange(e)}
          autoComplete="off"
          value={email}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  )
};

export default SimpleForm;
