import axios from './axios';
import { TodoType } from '../types/todoList';

type TodoCreateType = {
  content: string;
  checked: boolean;
};

class TodoDataService {
  getAll() {
    return axios.get('/todoList');
  }

  create(data: TodoCreateType) {
    return axios.post('/todoList', data);
  }

  update(data: TodoType) {
    return axios.put(`/todoList/${data.id}`, data);
  }

  delete(id: number) {
    return axios.delete(`/todoList/${id}`);
  }
}

export default new TodoDataService();
