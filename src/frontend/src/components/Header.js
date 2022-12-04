import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className="main-header">
        <ul>
            <li>
                <Link to="/" className="headerlink-title">Näytä kaikki urheilijat</Link>
            </li>
            <li>
                <Link to="/add" className="headerlink-title">Lisää urheilija</Link>
            </li>
            <li>
                <Link to="/update" className="headerlink-title">Muokkaa urheilijaa</Link>
            </li>
        </ul>
    </div>
  )
}