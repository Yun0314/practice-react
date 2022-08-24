export interface TodoType {
  id: number;
  content: string;
  checked: boolean;
}

export interface TodoItemProps extends TodoType {
  onCheckItem: (item: TodoType) => void;
  onDeleteItem: (id: number) => void;
}

export type TodoFormProps = {
  onAddItem: (content: string) => void;
};

export type TodoTabProps = {
  tabType: string;
  onChangeTab: (tabType: string) => void;
};

export type TabListType = {
  title: string;
  type: string;
};

export type TodoStateType = { data: TodoType[]; tab: string };

export type TodoActionType =
  | { type: 'SET_TODO'; payload: TodoType[] }
  | { type: 'ADD_TODO'; payload: TodoType }
  | { type: 'UPDATE_TODO'; payload: TodoType }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'CHANGE_TAB'; payload: string };
