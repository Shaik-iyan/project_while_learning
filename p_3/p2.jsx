import { useState } from "react";
function todo(){
  const[task,setTask]=useState("");
  const[todos,setTodos]=useState([]);
  function addTask(){
    if(task.trim()==="")return;
    setTodos([...todos,task]);
    setTask("");
  }
  return(

    <div>
      <h1> to-do list</h1>
      <input 
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      placeholder="enter a tsak"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default todo;