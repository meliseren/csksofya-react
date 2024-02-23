import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="box-footer">
        <div className="first-box">
          <div className="logo-footer">
            <a><img src="https://csksofya.com/img/logo.png" /></a>
          </div>
          <p>Site created by CSK Sofya Gıda</p>
          <p>Copyright 2023 © Her Hakkı Saklıdır.</p>
          <p>Csk Sofya Grup Gıda Tur. İnş. İç ve Dış Tic. Ltd. Şti.</p>
        </div>
        <div className="second-box">
          <nav>
            <ul>
              <li><Link to="">Anasayfa</Link></li>
              <li><Link to="/about">Hakkkımızda</Link></li>
              <li><Link to="/categories">Kategoriler</Link></li>
              <li><Link to="/gallery">Galeri</Link></li>
              <li><Link to="/contact">İletişim</Link></li>
            </ul>
          </nav>
        </div>
        <div className="third-box">
          <div className="contact-title-footer">
            <p>İletişim</p>
          </div>
          <div className="icon-information">
            <i className="fa-solid fa-envelope"><a>info@csksofya.com</a></i>
            <i className="fa-solid fa-phone"><a>+90 (533) 150 45 54</a></i>
            <i className="fa-solid fa-phone"><a>+90 (530) 178 12 15</a></i>
          </div>
          <div className="social-icons">
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer