import React, { useState, useEffect } from "react";
import axios from "axios";
import ToDos from "../APIs/ToDos";

function ToDosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data.slice(0,20));
    });
  }, []); //[] only fires one time when the compent loads

  return (
    <div className='Container'>
    <ToDos todos={todos}/>
</div>
  );
}

export default ToDosPage;
