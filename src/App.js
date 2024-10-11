import React, { useState } from 'react';
import TodoApp from './pages/TodoApp';
import Stats from './components/Stats';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Fonction pour marquer une tâche comme terminée ou non
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed, completedAt: !todo.completed ? new Date() : null }
        : todo
    );
    setTodos(updatedTodos); // Mise à jour de l'état des todos
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Sauvegarde dans le localStorage
  };

  return (
    <div>
      <TodoApp todos={todos} setTodos={setTodos} toggleComplete={toggleComplete} /> 
      <Stats todos={todos} /> {/* Passe les todos ici pour les statistiques */}
    </div>
  );
}

export default App;
