import React, { useState } from 'react'
import style from './Hamburger.module.scss'

const Hamburger = ({ openMenu, isOpen }) => {
  const handleOpenMenu = () => {
    openMenu(!isOpen)
  }
  return (
    <div
      className={`${style.hamburger} ${isOpen ? style.open : ''}`}
      onClick={handleOpenMenu}
    >
      <span />
      <span />
      <span />
    </div>
  )
}

export default Hamburger
