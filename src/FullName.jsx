import React, { useState } from "react";
import "./fullname.css";

export default function FullName() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [selectedName, setSelectedName] = useState("");

  const handleName = (e) => {
    e.preventDefault();

    if (!fname && !lname) {
      setSelectedName("");
      return;
    }
    setSelectedName(fname +" "+ lname);
  };

  return (
    <form className="form" onSubmit={handleName} >
      <div>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>

      {selectedName && <h1>FULLNAME : {selectedName}</h1>}
    </form>
  );
}
