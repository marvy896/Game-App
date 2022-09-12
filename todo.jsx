import React, { useState, useEffect } from "react";

export default function Todo() {
  let [Todos, setTodos] = useState([]);
  let [Text, setText] = useState("");

    function Todosets(){
            setTodos([...Todos, Text])
            setText("")
            // console.log(setTodos)
    }
    function ClearToDos(){
        setTodos([])
        setText("")
    }
function handleOnChange(index){
    let copy = [...Todos]
    copy.splice(index, 1)
    setTodos(copy)
}
    

  return (
    <div className="todo">
      <h2>My ToDo List</h2>
      <div>
        <input
          type="text"
          value={Text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="todobutton" onClick={Todosets} >Add ToDo</button>
        <button className="todobutton" onClick={ClearToDos}>Clear Completed</button>
      </div>
      <div className="convertss">
        
      {Todos.length > 0 &&Todos.map((Text, index) => (
        <output className="out" key={index}> <input type="checkbox" readOnly checked={false} onChange={()=>handleOnChange(index)}/>{Text}<br/></output>
      ))}</div>
    
    
      
    </div>
  );
}
