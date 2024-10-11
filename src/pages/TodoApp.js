import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext'; 
import TodoList from '../components/TodoList';
import TodoFilter from '../components/TodoFilter';
import PomodoroTimer from '../components/PomodoroTimer';
import { FiSun, FiMoon } from 'react-icons/fi'; 
import '../context/Theme.css'; 

function App() {
  const { isDarkMode, toggleTheme } = useTheme();  

  // Gestion des tâches
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState('all');
  const [newTodoDescription, setNewTodoDescription] = useState('');
  const [newTodoDueDate, setNewTodoDueDate] = useState('');
  const [newTodoPriority, setNewTodoPriority] = useState('medium'); // Priorité par défaut
  const [newTodoReminder, setNewTodoReminder] = useState('');


  // Change la classe du body en fonction du thème actuel
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode'; 
  }, [isDarkMode]);

  // Fonction pour ajouter une nouvelle tâche
 const addTodo = () => {
  if (!newTodoDescription) return;
  const newTodo = {
    id: Date.now(),
    description: newTodoDescription,
    completed: false,
    priority: newTodoPriority,
    dueDate: newTodoDueDate || null,
    reminder: newTodoReminder, // Ajout du rappel
    history: [] // Historique
  };
  const updatedTodos = [...todos, newTodo];
  setTodos(updatedTodos);
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  setNewTodoDescription('');
  setNewTodoDueDate('');
  setNewTodoReminder(''); // Réinitialisation du rappel
  setNewTodoPriority('medium'); // Réinitialisation de la priorité
};


  // Fonction pour marquer une tâche comme terminée ou non
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // Fonction pour supprimer une tâche
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // Fonction pour éditer une tâche
  const editTodo = (id, newDescription) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, description: newDescription } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // Fonction pour filtrer les tâches selon leur état
  const filteredTodos = () => {
    if (filter === 'completed') return todos.filter(todo => todo.completed);
    if (filter === 'active') return todos.filter(todo => !todo.completed);
    return todos;
  };

  useEffect(() => {
    // Gérer les rappels de date d'échéance
    const now = new Date();
    todos.forEach(todo => {
      if (todo.dueDate) {
        const dueDate = new Date(todo.dueDate);
        if (dueDate - now <= 86400000 && !todo.completed) { // 86400000 ms = 24 heures
          alert(`Rappel : La tâche "${todo.description}" est due dans moins de 24 heures!`);
        }
      }
    });
  }, [todos]);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      
      {/* Bouton pour changer le thème */}
      <button onClick={toggleTheme} className="theme-toggle-button">
        {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />} {/* Icône du thème */}
      </button>

      <h1>Todo List</h1>

      <div className="container">
        <div className="pomodoro-section">
          <PomodoroTimer />
        </div>
        <div className="todo-section">
          <TodoFilter setFilter={setFilter} />

          {/* Liste des tâches */}
          <TodoList
            todos={filteredTodos()}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />

          {/* Champ pour ajouter une nouvelle tâche */}
          <input
            type="text"
            placeholder="Ajouter une nouvelle tâche..."
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && newTodoDescription) {
                addTodo();
              }
            }}
          />

<input 
        type="date" 
        value={newTodoDueDate}
        onChange={(e) => setNewTodoDueDate(e.target.value)}
      />

          {/* Sélecteur de priorité */}
          <select
            value={newTodoPriority}
            onChange={(e) => setNewTodoPriority(e.target.value)}
          >
            <option value="low">Basse</option>
            <option value="medium">Moyenne</option>
            <option value="high">Haute</option>
          </select>

          {/* Bouton pour ajouter une tâche */}
          <button onClick={addTodo}>Ajouter</button>

        </div>
      </div>
    </div>
  );
}

export default App;
