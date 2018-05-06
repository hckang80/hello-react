import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const style = {
      paddingLeft: '20px',
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1 className="title">Todos</h1>
            <input
              id="input-todo"
              className="form-control input-lg"
              placeholder="What needs to be done?"
            />
            <ul className="nav nav-xs nav-pills">
              <li id="all" className="active">
                <a>All</a>
              </li>
              <li id="active">
                <a>Active</a>
              </li>
              <li id="completed">
                <a>Completed</a>
              </li>
            </ul>
            <ul id="todo-list" className="list-group">
              {/* <li class="list-group-item">
                <div class="hover-anchor">
                  <a class="hover-action text-muted">
                    <span class="glyphicon glyphicon-remove-circle pull-right" data-id="1"></span>
                  </a>
                  <label class="i-checks" for="1">
                    <input type="checkbox" id="1" checked><i></i>
                    <span>Angular</span>
                  </label>
                </div>
              </li> */}
            </ul>
            <div className="col-xs-6">
              <label className="i-checks" style={style}>
                <input id="chk-allComplete" type="checkbox" />
                <i />
                <span>Mark all as complete</span>
              </label>
            </div>
            <div className="col-xs-6 text-right">
              <button id="btn-removeCompletedTodos" className="btn btn-default btn-xs">
                Clear completed (<span id="completedTodos">0</span>)
              </button>
              <strong id="activeTodos" /> items left
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
