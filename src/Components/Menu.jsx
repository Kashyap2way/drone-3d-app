import React from 'react'
import './Menu.css'
import { FiBell, FiMessageSquare, FiUser } from 'react-icons/fi'

export default function Menu() {
  return (
    <div className="menu-bar">
      <div className="menu-item">About Developer</div>
      <div className="menu-item">Projects</div>
      <div className="menu-item">Submit Ideas</div>
      <div className="menu-item">Contact</div>
    </div>
  )
}
