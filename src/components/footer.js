import React from 'react';
import { FaHome, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "./footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <address>
              <p>123 boufarik address@</p>
              <p>boufarik - blida</p>
            </address>
          </div>

          <div className='phone'>
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <p>05-52-78-25-38</p>
            </h4>
          </div>

          <div className='email'>
            <h4>
              <FaEnvelope size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <a href='/'>info@email.com</a>
            </h4>
          </div>
        </div>

        <div className='right'>
            <h4>
                about the company 
            </h4>
            <p>
                sidaxedskdlsnkflknzwerldvnknaleafsdrwerterert<br/>
                rglsndrglnsdlkgnldfnvblkfnbvlkfdnbdfertr<br/>
                dlksnvkjsdfnvkjdsfweasrtdyfudgfhghgf
                
            </p>
            <div className='social '>
                <a href='facebook.com'>
                <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                </a>
                <a href=''>
                <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                </a>
                <a href=''>
                <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
