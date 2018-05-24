import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoNavList from './components/TodoNavList';
import TodoAddon from './components/TodoAddon';
import * as service from './services/todo';

import './App.css';

class App extends Component {
  state = {
    name: '',
    todos: [],
  };
  nav = ['all', 'active', 'completed'];

  getTodos = async () => {
    this.setState({
      fetching: true,
    });
    try {
      // const todos = await Promise.all([
      //   service.getTodos(),
      // ]);
      const todos = await service.getTodos();
      this.setState({
        todos: todos.data,
        status: 'all',
        fetching: false,
      });
    } catch (e) {
      this.setState({
        fetching: false,
      });
      console.log('error occurred', e);
    }
  };

  componentDidMount() {
    this.getTodos();
  }

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

  toggleCompletedAll = (completed) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => Object.assign({}, todo, { completed })),
    });
  };

  completedTodosLength() {
    const { todos } = this.state;
    return todos.filter(todo => todo.completed).length;
  }

  leftTodosLength() {
    const { todos } = this.state;
    return todos.filter(todo => !todo.completed).length;
  }

  removeTodoCompleted = () => {
    if (!this.completedTodosLength()) return;
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => !todo.completed),
    });
  };

  activeChangeNav = (filter) => {
    this.setState({
      status: filter,
    });
  };

  filterTodo() {
    const { todos, status } = this.state;
    if (status === 'active') {
      return todos.filter(todo => !todo.completed);
    } else if (status === 'completed') {
      return todos.filter(todo => todo.completed);
    }
    return todos;
  }

  render() {
    const {
      fetching, name, todos, status,
    } = this.state;
    const {
      addTodo,
      setValue,
      toggleCompleted,
      removeTodo,
      nav,
      activeChangeNav,
      toggleCompletedAll,
      removeTodoCompleted,
    } = this;
    return (
      <TodoListTemplate
        form={<Form name={name} addTodo={addTodo} setValue={setValue} />}
      >
        <TodoNavList
          nav={nav}
          status={status}
          activeChangeNav={activeChangeNav}
        />
        <TodoItemList
          todos={todos}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
          filterTodo={this.filterTodo()}
        />
        <TodoAddon
          toggleCompletedAll={toggleCompletedAll}
          completedTodosLength={this.completedTodosLength()}
          leftTodosLength={this.leftTodosLength()}
          removeTodoCompleted={removeTodoCompleted}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
