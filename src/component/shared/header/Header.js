import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const Header = ( {navbarItems} ) => {
  return (
    <header className="app-header">
        <div className="logo">
            <a><img src="https://csksofya.com/img/logo.png" /></a>
        </div>
        <nav>
            <ul>
                <li><Link to="">Anasayfa</Link></li>
                <li><Link to="/about">Hakkkımızda</Link></li>
                <li><Link to="/categories">Kategoriler</Link></li>
                <li><Link to="/gallery">Galeri</Link></li>
                <li><Link to="/contact">İletişim</Link></li>
            </ul>
        </nav>
    </header>
  )
}

Header.defaultProps = {
    navbarItems: ["Lorem", "Ipsum", "Dolor"]
}

Header.propTypes = {
    navbarItems: PropTypes.arrayOf(PropTypes.string)
}

export default React.memo(Header);