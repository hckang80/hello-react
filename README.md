```js
const ReactTodoList {
  V1: One Component,
  V2: Component separation,
  V3: HttpClient(working now) {
    getTodos: get ('/todos'),
    addTodo: post ('/todos', payload) // payload: { id, content, completed }
    delTodo: delete (`/todos/id/${id}`),
    toggleTodoComplete: patch (`/todos/id/${id}`, payload), // payload: { completed }
    toggleAllComplete: patch ('/todos', payload), // payload: { completed }
    clearCompleted: delete ('/todos/completed')
  },
  V4: Redux(Task scheduled)
}
```
