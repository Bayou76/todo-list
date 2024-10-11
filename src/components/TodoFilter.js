import React from 'react';

function TodoFilter({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("all")}>Tous</button>
      <button onClick={() => setFilter("active")}>Actifs</button>
      <button onClick={() => setFilter("completed")}>Complétés</button>
    </div>
  );
}

export default TodoFilter;
