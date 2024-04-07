import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Jsx from "./Containers/Jsx";
import Databinding from "./Containers/Databinding";
import Users from "./Containers/Users";

function App() {
  return (
      <div className='container'>
        <nav className='navbar navbar-expand navbar-light bg-light'>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/">JSX</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/binding">Databinding</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Jsx />} />
            <Route path="/binding" element={<Databinding />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
