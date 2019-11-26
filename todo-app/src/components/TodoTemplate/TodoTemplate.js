import React from 'react';
import styles from './TodoTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoTemplate = ({ children }) => (
  <div className="TodoTemplate">
    <div className="app-title">일정 관리</div>
    <div className="content">{children}</div>
  </div>
);

export default TodoTemplate;
