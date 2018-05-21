import axios from 'axios';

const url = 'http://localhost:4600';

export const getTodos = () => axios.get(`${url}/todos`);
