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
