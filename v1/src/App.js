import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: '',
    todos: [
      { id: 0, content: 'HTML', completed: false },
      { id: 1, content: 'CSS', completed: true },
      { id: 2, content: 'Javascript', completed: false },
    ],
    nav: ['all', 'active', 'completed'],
    status: 'all',
  };

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

  render() {
    let filterTodo;
    if (this.state.status === 'active') {
      filterTodo = this.state.todos.filter(todo => !todo.completed);
    } else if (this.state.status === 'completed') {
      filterTodo = this.state.todos.filter(todo => todo.completed);
    } else {
      filterTodo = this.state.todos;
    }
    const { name } = this.state;
    const todoList = filterTodo.map(todo => (
      <li className="list-group-item" key={todo.id}>
        <div className="hover-anchor">
          <a className="hover-action text-muted">
            <span
              className="glyphicon glyphicon-remove-circle pull-right"
              onClick={() => this.removeTodo(todo.id)}
            />
          </a>
          <label className="i-checks">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {}}
              onClick={() => this.toggleCompleted(todo.id)}
            />
            <i />
            <span>{todo.content}</span>
          </label>
        </div>
      </li>
    ));
    const navList = this.state.nav.map((item, index) => (
      <li
        key={index}
        id={item}
        className={item === this.state.status ? 'active' : ''}
        onClick={() => this.activeChangeNav(item)}
      >
        <a>{item}</a>
      </li>
    ));

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1 className="title">Todos</h1>
            <input
              id="input-todo"
              className="form-control input-lg"
              placeholder="What needs to be done?"
              value={name}
              onKeyUp={this.addTodo}
              onChange={this.setValue}
            />
            <ul className="nav nav-xs nav-pills">{navList}</ul>
            <ul className="list-group">{todoList}</ul>
            <div className="col-xs-6">
              <label className="i-checks">
                <input
                  type="checkbox"
                  onChange={e => this.toggleCompletedAll(e.target.checked)}
                />
                <i />
                <span>Mark all as complete</span>
              </label>
            </div>
            <div className="col-xs-6 text-right">
              <button
                className="btn btn-default btn-xs"
                onClick={this.removeTodoCompleted}
              >
                Clear completed (<span>{this.completedTodosLength()}</span>)
              </button>
              <strong>{this.leftTodosLength()}</strong> item
              {this.leftTodosLength() > 1 && 's'} left
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
