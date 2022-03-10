import PropTypes from 'prop-types'
import React from 'react'

const Header = ( { title } , { subtitle }) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Caesar Shift Calculator'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header