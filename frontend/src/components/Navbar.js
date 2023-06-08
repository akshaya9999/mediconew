import React, { useState } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Home from './Home';
import MedView from './Explore';
import Add from './Add';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);

  const handleMenuClick = (path) => {
    handleClose();
    navigate(path);
  };

  return (
    <div className="w-screen h-20 z-50 bg-cyan-800 fixed drop-shadow-lg">
      <div className="px-4 flex justify-between items-center w-full h-full">
        <h1 className="text-3xl font-bold sm:text-4xl pr-4 py-2 text-white">MEDICO</h1>
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-4">
            <li>
              <NavLink
                to="/"
                exact
                className="text-white"
                activeClassName="font-bold"
                onClick={handleClose}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                exact
                className="text-white"
                activeClassName="font-bold"
                onClick={handleClose}
              >
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add"
                exact
                className="text-white"
                activeClassName="font-bold"
                onClick={handleClose}
              >
                Add
              </NavLink>
            </li>
          </ul>

          <div className="md:hidden ml-4" onClick={handleClick}>
            {!nav ? (
              <MenuIcon className="w-5 " onClick={() => handleMenuClick('/')} />
            ) : (
              <XIcon className="w-5" onClick={() => handleMenuClick('/')} />
            )}
          </div>
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-cyan-700 w-full px-8 mb-4 z-50'}>
        <li className="border-b-2 border-cyan-900 w-full">
          <NavLink
            to="/"
            exact
            className="block py-2 text-black"
            activeClassName="font-bold"
            onClick={handleClose}
          >
            Home
          </NavLink>
        </li>
        <li className="border-b-2 border-cyan-900 w-full">
          <NavLink
            to="/explore"
            exact
            className="block py-2 text-black"
            activeClassName="font-bold"
            onClick={handleClose}
          >
            Explore
          </NavLink>
        </li>
        <li className="border-b-2 border-cyan-900 w-full">
          <NavLink
            to="/add"
            exact
            className="block py-2 text-black"
            activeClassName="font-bold"
            onClick={handleClose}
          >
            Add
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<MedView />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
};

export default Navbar;
