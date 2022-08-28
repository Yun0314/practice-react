import React, { memo } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { TodoTabProps, TabListType } from '@/types/todoList';
import { TodoToggleButtonGroup } from '@/styles/mui/muiTodoList';

const tabList: TabListType[] = [
  { title: 'All', type: 'all' },
  { title: 'Todo', type: 'active' },
  { title: 'Completed', type: 'completed' }
];

const TodoTab: React.FC<TodoTabProps> = (props) => {
  const { tabType, onChangeTab } = props;

  return (
    <TodoToggleButtonGroup value={tabType} exclusive>
      {tabList.map(({ title, type }) => (
        <ToggleButton key={type} value={type} onClick={() => onChangeTab(type)}>
          {title}
        </ToggleButton>
      ))}
    </TodoToggleButtonGroup>
  );
};

export default memo(TodoTab);
