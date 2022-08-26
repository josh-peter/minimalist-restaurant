import React from "react";
import "../APIs/ToDos.css"

function ToDos({ todos }) {

  return (
    <div className="TodoCon">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <input type="checkbox" checked={todo.completed} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDos;
