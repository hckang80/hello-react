import React, { Component } from 'react';

class TodoNavList extends Component {
  render() {
    const { nav, status, activeChangeNav } = this.props;
    const navList = nav.map((item, index) => (
      <li
        key={index}
        id={item}
        className={item === status ? 'active' : ''}
        onClick={() => activeChangeNav(item)}
      >
        <a>{item}</a>
      </li>
    ));

    return <ul className="nav nav-xs nav-pills">{navList}</ul>;
  }
}

export default TodoNavList;
