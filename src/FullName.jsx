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
        <h1>Full Name Display</h1>
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

      <button type="next">Next</button>

      {selectedName && <h1>Full Name : {selectedName}</h1>}
    </form>
  );
}
