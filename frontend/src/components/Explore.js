import React, { useState, useEffect } from 'react';
import './Explore.css'

function MedView() {
  const [meds, setMeds] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8001/createmed/')
      .then(response => response.json())
      .then(data => setMeds(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div className='heading'>
        <h1>Medications List</h1>
      </div>
      <div className='meds-container'>
        {meds.map(med => (
          <div key={med.medname} className='med-box'>
            <h2>Name: {med.medname}</h2>
            <p>Symptom: {med.sympt}</p>
            <p>Name: {med.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedView;