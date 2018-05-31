import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
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
              <li className="active">
                <a>all</a>
              </li>
              <li>
                <a>active</a>
              </li>
              <li>
                <a>completed</a>
              </li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="hover-anchor">
                  <a className="hover-action text-muted">
                    <span className="glyphicon glyphicon-remove-circle pull-right" />
                  </a>
                  <label className="i-checks">
                    <input type="checkbox" />
                    <i />
                    <span>HTML</span>
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="hover-anchor">
                  <a className="hover-action text-muted">
                    <span className="glyphicon glyphicon-remove-circle pull-right" />
                  </a>
                  <label className="i-checks">
                    <input type="checkbox" />
                    <i />
                    <span>CSS</span>
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                <div className="hover-anchor">
                  <a className="hover-action text-muted">
                    <span className="glyphicon glyphicon-remove-circle pull-right" />
                  </a>
                  <label className="i-checks">
                    <input type="checkbox" />
                    <i />
                    <span>JavaScript</span>
                  </label>
                </div>
              </li>
            </ul>
            <div className="col-xs-6">
              <label className="i-checks">
                <input type="checkbox" />
                <i />
                <span>Mark all as complete</span>
              </label>
            </div>
            <div className="col-xs-6 text-right">
              <button className="btn btn-default btn-xs">
                Clear completed (<span>0</span>)
              </button>
              <strong>0</strong> item left
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
