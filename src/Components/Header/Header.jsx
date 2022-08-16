import React from 'react'
import Nav from './Nav'
import style from './Header.module.css'

const Header = () => {
  return (
    <header >
        <Nav isHeader={ true }/>
    </header>
  )
}

export default Header