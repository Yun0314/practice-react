import { TodoType } from '@/types/todoList';

// api 打過去後會自動幫加上 id
type TodoCreateType = {
  content: string;
  checked: boolean;
};

class TodoServiceConfig {
  getAll = () => ({
    url: '/todoList',
    method: 'GET'
  });

  create = (data: TodoCreateType) => ({
    url: '/todoList',
    method: 'POST',
    data
  });

  update = (data: TodoType) => ({
    url: `/todoList/${data.id}`,
    method: 'PUT',
    data
  });

  delete = (id: number) => ({
    url: `/todoList/${id}`,
    method: 'DELETE'
  });
}

export default new TodoServiceConfig();
