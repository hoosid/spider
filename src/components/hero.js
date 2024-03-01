import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import IntroImg from '../assets/spider.webp'; 
import "./body.css"


class Hero extends Component {
    render (){
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="sidaxe pro" />
        </div>
        <div className="content">
          {/* <p>Hi, I am sidaxe pro</p>
          <h1>React the best</h1> */}
          <p>{this.props.heading}</p>
          <h1>{this.props.text}</h1>
          <div>
            <Link to="/about" className="btn">
              about
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}}

export default Hero; 
