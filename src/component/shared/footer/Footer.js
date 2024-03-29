import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="boxes-footer">
        <div className="box-footer">
          <div className="logo-footer">
            <a><img src="https://csksofya.com/img/logo.png" /></a>
          </div>
          <p>Site created by CSK Sofya Gıda</p>
          <p>Copyright 2023 © Her Hakkı Saklıdır.</p>
          <p>Csk Sofya Grup Gıda Tur. İnş. İç ve Dış Tic. Ltd. Şti.</p>
        </div>
        <div className="box-footer">
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
        <div className="box-footer">
          <div className="contact-title-footer">
            <h2>İletişim</h2>
          </div>
          <div className="icon-information">
            <a><i className="fa-solid fa-envelope"></i>info@csksofya.com</a>
            <a><i className="fa-solid fa-phone"></i>+90 (533) 150 45 54</a>
            <a><i className="fa-solid fa-phone"></i>+90 (530) 178 12 15</a>
          </div>
          <div className="social-icons">
            <a><i className="fa-brands fa-facebook-f"></i></a>
            <a><i className="fa-brands fa-instagram"></i></a>
            <a><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer