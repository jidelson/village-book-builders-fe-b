import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function HeadmasterNav(props) {
  const { setVisible } = props;
  return (
    <div>
      <NavLink to="/dashboard" onClick={() => setVisible(true)}>
        <button buttonText="Home" className="btn l2-btn menuLinks">
          Home
        </button>
      </NavLink>
      <NavLink to="/mentor-pairings" onClick={() => setVisible(true)}>
        <button className="btn l2-btn menuLinks">Mentor Pairings</button>
      </NavLink>
      <NavLink to="/mentor-advisor" onClick={() => setVisible(true)}>
        <button className="btn l2-btn menuLinks">Mentor Advisor</button>
      </NavLink>
      <NavLink to="/school-village" onClick={() => setVisible(true)}>
        <button className="btn l2-btn menuLinks">School/Village</button>
      </NavLink>
      <NavLink to="/library" onClick={() => setVisible(true)}>
        <button className="btn l2-btn menuLinks">Library</button>
      </NavLink>
    </div>
  );
}

export default HeadmasterNav;
