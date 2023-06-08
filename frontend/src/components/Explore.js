import React, { useState, useEffect } from 'react';

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
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="heading text-center">
        <h1 className='text-4xl text-cyan-800'>Medications List</h1>
      </div>
      <div className="pt-10">
        <input type="text" placeholder="Search by Medicine name" value={searchQuery} onChange={handleSearchChange} className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 w-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {filteredMeds.map(med => (
          <div key={med.medname} className="bg-white rounded-md shadow-md p-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-800">Medicine Name: {med.medname}</h2>
            <p className="mb-2">Side Effectss: {med.sympt}</p>
            <p className="mb-2">Name: {med.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedView;
