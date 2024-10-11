import React, { useState } from "react";
import "./TodoItem.css";

function TodoItem({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [showHistory, setShowHistory] = useState(false); // État pour gérer la visibilité de l'historique

  const handleSave = () => {
    editTodo(todo.id, newDescription);
    setIsEditing(false);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory); // Bascule l'état de visibilité
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "high":
        return "high-priority";
      case "medium":
        return "medium-priority";
      case "low":
        return "low-priority";
      default:
        return "";
    }
  };

  return (
    <li className={getPriorityClass(todo.priority)}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleSave}>Enregistrer</button>
        </>
      ) : (
        <>
          <span
            className={todo.completed ? "completed" : ""}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.description} {todo.dueDate && `- Échéance : ${new Date(todo.dueDate).toLocaleDateString()}`}
          </span>
          <div>
            <button onClick={() => setIsEditing(true)}>Modifier</button>
            <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
            <button onClick={() => toggleComplete(todo.id)}>Terminer</button>
          </div>

          {/* Élément cliquable pour afficher l'historique */}
          <div>
            <span className="history-toggle" onClick={toggleHistory}>
              Historique
            </span>
            {showHistory && (
              <ul className="history">
                {todo.history.length > 0 ? (
                  todo.history.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <li>Aucun historique</li>
                )}
              </ul>
            )}
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
