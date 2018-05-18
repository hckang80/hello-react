import React from 'react';

const TodoListTemplate = ({ form, children }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <h1 className="title">Todos</h1>
        {form}

        {children}
      </div>
    </div>
  </div>
);

export default TodoListTemplate;
