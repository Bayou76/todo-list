import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, deleteTodo, editTodo,addSubtask,toggleSubtaskComplete, deleteSubtask}) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} 
          editTodo={editTodo} 
          addSubtask={addSubtask}
          toggleSubtaskComplete={toggleSubtaskComplete}
          deleteSubtask={deleteSubtask}
        />
      ))}
    </ul>
  );
}

export default TodoList;