import React, {  useState } from "react";
import "./fullname.css";

export default function FullName(){
    
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [selectedName, setSelectedName] = useState("");
    
  const handleName=(e)=>{
    e.preventDefault();
    if(!fname || !lname){
     alert("please fill the field")
     return;
    }
    setSelectedName(fname +" "+ lname);
  }
   

    return(
       <form className="form" onSubmit={handleName} noValidate>
        <div>
            <label htmlFor="">FullName:</label>
            <input type="text" value={fname} onChange={(e)=> setFname(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">LastName:</label>
            <input type="text" value={lname} onChange={(e)=> setLname(e.target.value)}/>
        </div>
        
        <button type="submit">submit</button>
        {selectedName && (<h1>FULLNAME : {selectedName}</h1>)}
       </form>
    )
}