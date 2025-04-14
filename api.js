import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/tasks/'; // Django backend will go here

export const getTasks = () => axios.get(API_BASE_URL);
export const addTask = (task) => axios.post(API_BASE_URL, task);
export const deleteTask = (id) => axios.delete(`${API_BASE_URL}${id}/`);
