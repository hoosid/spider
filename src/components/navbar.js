// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbarstyles.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleclick = () => setClick(!click);

  const [color ,setcolor]=useState(false);
  const changercolor =()=>{
if(window.scrollY >=1){
  setcolor(true);
}else{
  setcolor(false);
}
  };

  window.addEventListener("scroll",changercolor)

  return (
    <div className={color ? "header header-bg ":"header"}>
      <Link to="/">
        <h1>sidaxe</h1>
      </Link>
      <ul className={click ? 'main active' : 'main'}>
        <li>
          <Link to="/" onClick={handleclick}>
            home
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={handleclick}>
            project
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleclick}>
            about
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleclick}>
            contact
          </Link>
        </li>
      </ul>
      <div className="mel" onClick={handleclick}>
        {click ? <FaTimes size={20} style={{ color: '#fff' }} /> : <FaBars size={20} style={{ color: '#fff' }} />}
      </div>
    </div>
  );
};

export default Navbar;
