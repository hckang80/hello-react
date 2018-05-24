import axios from 'axios';

const url = 'http://localhost:4500';

export const getTodos = () => axios.get(`${url}/todos`);

export const addTodo = (id, content) => {
  const payload = { id, content, completed: false };
  return axios.post(`${url}/todos`, payload);
};
