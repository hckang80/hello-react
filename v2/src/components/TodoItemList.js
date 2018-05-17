import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, toggleCompleted, removeTodo } = this.props;
    const todoList = todos.map(todo => (
      <TodoItem
        {...todo}
        key={todo.id}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    ));

    return <ul className="list-group">{todoList}</ul>;
  }
}

export default TodoItemList;
