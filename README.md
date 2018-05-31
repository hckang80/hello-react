```js
const ReactTodoList {
  V1: 'One Component',
  V2: 'Component separation',
  V3: ['HttpClient',
        {
          getTodos: get ('/todos'),
          addTodo: post ('/todos', payload) // payload: { id, content, completed }
          toggleCompleted: patch (`/todos/id/:id`, payload), // payload: { completed }
          removeTodo: delete (`/todos/id/:id`),
          toggleCompletedAll: patch ('/todos', payload), // payload: { completed }
          removeTodoCompleted: delete ('/todos/completed')
        }
      ]
  },
  V4: TypeScript & Redux(working now)
}
```
