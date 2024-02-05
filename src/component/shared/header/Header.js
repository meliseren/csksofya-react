import React from 'react'
import PropTypes from 'prop-types'

const Header = ( {navbarItems} ) => {
  return (
    <header className="app-header">
        <div className="logo">
            <img src="https://csksofya.com/img/logo.png" />
        </div>
        <nav>
            <ul>
                {navbarItems}
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