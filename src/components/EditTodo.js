import React, { useState } from 'react';

function EditTodo({ todo, onSave }) {
  const [description, setDescription] = useState(todo.description);

  const handleSave = () => {
    onSave({ ...todo, description });
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSave}>Sauvegarder</button>
    </div>
  );
}

export default EditTodo;
