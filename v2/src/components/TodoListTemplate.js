import React from 'react';

const TodoListTemplate = ({ form, children }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <h1 className="title">Todos</h1>
        {form}

        {children}
      </div>
    </div>
  </div>
);

// class TodoListTemplate extends Component {
//   render() {
//     const {
//       name, todos, status, nav,
//     } = this.props;

//     let filterTodo;
//     if (status === 'active') {
//       filterTodo = todos.filter(todo => !todo.completed);
//     } else if (status === 'completed') {
//       filterTodo = todos.filter(todo => todo.completed);
//     } else {
//       filterTodo = todos;
//     }
//     // const { name } = this.state;
//     const todoList = filterTodo.map(todo => (
//       <li className="list-group-item" key={todo.id}>
//         <div className="hover-anchor">
//           <a className="hover-action text-muted">
//             <span
//               className="glyphicon glyphicon-remove-circle pull-right"
//               onClick={() => this.removeTodo(todo.id)}
//             />
//           </a>
//           <label className="i-checks">
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => {}}
//               onClick={() => this.toggleCompleted(todo.id)}
//             />
//             <i />
//             <span>{todo.content}</span>
//           </label>
//         </div>
//       </li>
//     ));
//     const navList = nav.map((item, index) => (
//       <li
//         key={index}
//         id={item}
//         className={item === status ? 'active' : ''}
//         onClick={() => this.activeChangeNav(item)}
//       >
//         <a>{item}</a>
//       </li>
//     ));

//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 col-md-offset-2">
//             <h1 className="title">Todos</h1>
//             <input
//               id="input-todo"
//               className="form-control input-lg"
//               placeholder="What needs to be done?"
//               value={this.props.name}
//               onKeyUp={this.addTodo}
//               onChange={this.setValue}
//             />
//             <ul className="nav nav-xs nav-pills">{navList}</ul>
//             <ul className="list-group">{todoList}</ul>
//             <div className="col-xs-6">
//               <label className="i-checks">
//                 <input
//                   type="checkbox"
//                   onChange={e => this.toggleCompletedAll(e.target.checked)}
//                 />
//                 <i />
//                 <span>Mark all as complete</span>
//               </label>
//             </div>
//             <div className="col-xs-6 text-right">
//               <button
//                 className="btn btn-default btn-xs"
//                 onClick={this.removeTodoCompleted}
//               >
//                 Clear completed (<span>{this.completedTodosLength()}</span>)
//               </button>
//               <strong>{this.leftTodosLength()}</strong> item
//               {this.leftTodosLength() > 1 && 's'} left
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default TodoListTemplate;
