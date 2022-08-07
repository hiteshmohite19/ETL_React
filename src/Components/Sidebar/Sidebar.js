import React from 'react'
import { Link, Router } from 'react-router-dom';
import './sidebar.css'

function Sidebar() {
  return (
      <div className="sidebar">
          <ul>
              <li>
                  <Link to="/">Dashboard</Link>
              </li>
              <li>
                  <Link to="/data-source">Data Source</Link>
              </li>
          </ul>
      </div>
  );
}

export default Sidebar