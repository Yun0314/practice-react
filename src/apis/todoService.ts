import { TodoType } from '@/types/todoList';

// api 打過去後會自動幫加上 id
type TodoCreateType = {
  content: string;
  checked: boolean;
};

const url = '/todoList';

const TodoServiceConfig = {
  getAll: () => ({
    url,
    method: 'GET'
  }),
  create: (data: TodoCreateType) => ({
    url,
    method: 'POST',
    data
  }),
  update: (data: TodoType) => ({
    url: `${url}/${data.id}`,
    method: 'PUT',
    data
  }),
  delete: (id: number) => ({
    url: `${url}/${id}`,
    method: 'DELETE'
  })
};

export default TodoServiceConfig;
