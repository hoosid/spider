
import React from 'react';
import "./boxs.css";
import { NavLink } from 'react-router-dom';

function Boxs(props) { 
  return (
    <div className='card'>
          <img src={props.Imagsrc} alt='sidaxe' />
          <h2 className='title'>{props.title}</h2>
          <div className='details'>
            <p>{props.Text}</p>
            <div className='pro-btns'>
              <NavLink to={props.view} className="btn">view</NavLink>
              <NavLink to="utl.com" className="btn">play</NavLink>
            </div>
          </div>
        </div>
  );
}
export default Boxs;