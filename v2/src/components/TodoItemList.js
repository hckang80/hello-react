import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.filterTodo !== nextProps.filterTodo;
  }
  render() {
    const { filterTodo, toggleCompleted, removeTodo } = this.props;
    const todoList = filterTodo.map(todo => (
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
