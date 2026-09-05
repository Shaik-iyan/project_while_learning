
import {useState} from "react";
export default function Studentdashboard(){
    const [age,setAge]=useState(21);
    const [showSubjects,setShowSubjects]=useState(true);
    const subject=["javascript","React","HTML","css"];
    function increaseAge(){
      if (age<110){
        setAge(age+1);
      }
    }
    function toggleSubjects(){
      setShowSubjects(!showSubjects);
    }
    function Decreseage(){
          if(age>1){
            setAge(age-1);
          }
    }
    return(
        <>
            <div>
              <h2>Name:Shaik</h2>
              <p>Couse :Bca</p>
              <p>Age: {age}</p>
              <button onClick={increaseAge}>Increase Age</button>
              <button onClick={Decreseage}>   Decreas Age</button>
              <h3>Subjects :</h3>
              {showSubjects && (<ul>
                {subject.map((subject)=>(
                  <li key={subject}>{subject}</li>
                ))}
              </ul>)}
              <button onClick={toggleSubjects}>Show/hide subjects</button>
            </div>
        
        </>

    )
}