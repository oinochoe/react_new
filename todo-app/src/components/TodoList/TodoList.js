import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.scss';

const TodoList = () => {
  return (
    <div class="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
