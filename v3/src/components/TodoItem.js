import React, { Component } from 'react';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.completed !== nextProps.completed;
  }
  render() {
    const {
      id, completed, content, toggleCompleted, removeTodo,
    } = this.props;
    return (
      <li className="list-group-item" key={id}>
        <div className="hover-anchor">
          <a className="hover-action text-muted">
            <span
              className="glyphicon glyphicon-remove-circle pull-right"
              onClick={() => removeTodo(id)}
            />
          </a>
          <label className="i-checks">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => {}}
              onClick={() => toggleCompleted(id, completed)}
            />
            <i />
            <span>{content}</span>
          </label>
        </div>
      </li>
    );
  }
}

export default TodoItem;
