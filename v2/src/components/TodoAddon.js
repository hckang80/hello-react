import React from 'react';

const TodoAddon = ({
  toggleCompletedAll,
  completedTodosLength,
  leftTodosLength,
  removeTodoCompleted,
}) => (
  <div>
    <div className="col-xs-6">
      <label className="i-checks">
        <input
          type="checkbox"
          onChange={e => toggleCompletedAll(e.target.checked)}
        />
        <i />
        <span>Mark all as complete</span>
      </label>
    </div>
    <div className="col-xs-6 text-right">
      <button className="btn btn-default btn-xs" onClick={removeTodoCompleted}>
        Clear completed (<span>{completedTodosLength}</span>)
      </button>
      <strong>{leftTodosLength}</strong> item
      {leftTodosLength > 1 && 's'} left
    </div>
  </div>
);

export default TodoAddon;
