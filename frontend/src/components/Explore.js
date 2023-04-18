import React, { useState, useEffect } from 'react';
import './Explore.css'

function MedView() {
  const [meds, setMeds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/createmed/')
      .then(response => response.json())
      .then(data => setMeds(data))
      .catch(error => console.error(error));
  }, []);

  const filteredMeds = meds.filter(med => {
    return med.medname.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div className='heading'>
        <h1>Medications List</h1>
      </div>
      <div className='search-bar'>
        <input type='text' placeholder='Search by name' value={searchQuery} onChange={handleSearchChange} />
      </div>
      <div className='meds-container'>
        {filteredMeds.map(med => (
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
