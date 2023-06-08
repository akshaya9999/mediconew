import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [medname, setMedname] = useState("");
  const [sympt, setSympt] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const med = { medname, sympt, name, email };
    try {
      const response = await fetch("http://127.0.0.1:8000/createmed/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(med),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        navigate("/explore");
      } else {
        console.log("Registration failed.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full">
            <div className="py-5 px-8 bg-cyan-600 text-white text-center">
              <h1 className="text-3xl font-bold">Add Symptoms</h1>
            </div>
            <form onSubmit={handleSubmit} className="px-8 py-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medname">
                  Medicine Name
                </label>
                <input
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 w-full"
                  type="text"
                  value={medname}
                  name="medname"
                  id="medname"
                  onChange={(e) => setMedname(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sympt">
                  Side Effects You Have Had
                </label>
                <input
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 w-full"
                  type="text"
                  value={sympt}
                  name="sympt"
                  id="sympt"
                  onChange={(e) => setSympt(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 w-full"
                  type="text"
                  value={name}
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 w-full"
                  type="email"
                  value={email}
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
