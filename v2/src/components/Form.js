import React from 'react';

const Form = ({ name, addTodo, setValue }) => (
  <input
    id="input-todo"
    className="form-control input-lg"
    placeholder="What needs to be done?"
    value={name}
    onKeyUp={addTodo}
    onChange={setValue}
  />
);

export default Form;
