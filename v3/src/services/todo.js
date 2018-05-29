import axios from 'axios';

const url = 'http://localhost:4500';

export const getTodos = () => axios.get(`${url}/todos`);

export const addTodo = (id, content) => {
  const payload = { id, content, completed: false };
  return axios.post(`${url}/todos`, payload);
};

export const toggleCompleted = (id, completed) => {
  const payload = { completed: !completed };
  return axios.patch(`${url}/todos/id/${id}`, payload);
};

export const removeTodo = id => axios.delete(`${url}/todos/id/${id}`);

export const toggleCompletedAll = (completed) => {
  const payload = { completed };
  return axios.patch(`${url}/todos`, payload);
};

export const removeTodoCompleted = () => axios.delete(`${url}/todos/completed`);
