import PropTypes from 'prop-types';
import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = ({
  todos,
  deleteTodo,
  toggleTodoComplete,
  editTodoTitle,
}) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleTodoComplete={toggleTodoComplete}
        todos={todos}
        editTodoTitle={editTodoTitle}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ),
  deleteTodo: PropTypes.func.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired,
  editTodoTitle: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};
