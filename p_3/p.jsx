import { useState } from "react";
function Counterr(){
  const[count,Counter]=useState(0);
  const[color,setColor]=useState("white");
  return(
    <>
    <div style={{backgroundColor:color,minHeight:"100vh"}}>
      <h1>{count}</h1>
      <button onClick={()=>Counter(count+1)}>Increase</button>
      <button onClick={()=>Counter(count-1)}>Decrease</button>
      <button onClick={()=>Counter(0)}>Reset</button>
      <button onClick={()=>setColor("red")}>Change</button>


    </div>
      
    </>

  );

}
export default Counterr;