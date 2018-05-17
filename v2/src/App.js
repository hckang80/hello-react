import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

import './App.css';

class App extends Component {
  state = {
    name: '',
    todos: [
      { id: 0, content: 'HTML', completed: false },
      { id: 1, content: 'CSS', completed: true },
      { id: 2, content: 'Javascript', completed: false },
    ],
    // status: 'all',
  };
  // nav = ['all', 'active', 'completed'];

  getMax() {
    return Math.max(...this.generatorId()) + 1;
  }

  setValue = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  generatorId() {
    const { todos } = this.state;
    return todos.length ? todos.map(todo => todo.id) : [0];
  }

  addTodo = (e) => {
    if (e.key === 'Enter') {
      const { todos } = this.state;
      this.setState({
        todos: [
          { id: this.getMax(), content: e.target.value, completed: false },
          ...todos,
        ],
        name: '',
      });
    }
  };

  toggleCompleted = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo =>
        (id === todo.id
          ? Object.assign({}, todo, { completed: !todo.completed })
          : todo)),
    });
  };

  removeTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id),
    });
  };

  // toggleCompletedAll = (completed) => {
  //   const { todos } = this.state;
  //   this.setState({
  //     todos: todos.map(todo => Object.assign({}, todo, { completed })),
  //   });
  // };

  // completedTodosLength() {
  //   const { todos } = this.state;
  //   return todos.filter(todo => todo.completed).length;
  // }

  // leftTodosLength() {
  //   const { todos } = this.state;
  //   return todos.filter(todo => !todo.completed).length;
  // }

  // removeTodoCompleted = () => {
  //   if (!this.completedTodosLength()) return;
  //   const { todos } = this.state;
  //   this.setState({
  //     todos: todos.filter(todo => !todo.completed),
  //   });
  // };

  // activeChangeNav = (filter) => {
  //   this.setState({
  //     status: filter,
  //   });
  // };

  render() {
    const { name, todos } = this.state;
    const {
      addTodo, setValue, toggleCompleted, removeTodo,
    } = this;

    return (
      <TodoListTemplate
        form={<Form name={name} addTodo={addTodo} setValue={setValue} />}
      >
        <TodoItemList
          todos={todos}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />
      </TodoListTemplate>
    );
    // const { name, todos, status } = this.state;
    // const { nav } = this;

    // return <TodoTemplate name={name} todos={todos} status={status} />;
  }
}

export default App;
