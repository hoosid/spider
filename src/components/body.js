import "./body.css"

import React from 'react'
import { Link } from 'react-router-dom';
import IntroImg from "../assets/logo spider-man.jpg"

function body() {
  return (
    <div className="hero">
       <div className="mask">
        <img className="intro-img" src={IntroImg} alt="sidaxe pro"/>
       </div>
       <div className="content">
         <p>Hi , i'am sidaxe pro</p>
         <h1>react the best</h1>
         <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">contact</Link>
         </div>
       </div>



    </div>
  )
}

export default body

