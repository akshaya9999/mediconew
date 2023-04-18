import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import "./Add.css"

function Add() {
  const [medname, setMedname] = useState("");
  const [sympt, setSympt] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const med = { medname, sympt, name ,email };
    try {
        const response = await fetch('http://127.0.0.1:8000/createmed/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(med),
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
            navigate('/explore');
        } else {
            console.log('Registration failed.');
        }
    } catch (error) {
        console.log('Error:', error);
    }
}

  return (
    <div className="bg">
    <form onSubmit={handleSubmit}>
      <div className="box">

      <label>
        Medicine Name:
        <input type="text" value={medname} name='medname' onChange={(e) => setMedname(e.target.value)} />
      </label>
      <br />
      <label>
        Symptoms:
        <input type="text" value={sympt} name='sympt' onChange={(e) => setSympt(e.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add</button>
      </div>
    </form>
    </div>
  );
}
export default Add;