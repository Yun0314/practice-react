import React, { memo } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { TodoTabProps, TabListType } from '@/types/todoList';
import { TodoToggleButtonGroup } from '@/styles/styleTodoList';

const tabList: TabListType[] = [
  { title: '全部', type: 'all' },
  { title: '進行中', type: 'active' },
  { title: '完成', type: 'completed' },
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
