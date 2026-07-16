import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <nav className="nav">
        <NavLink to="/" end className="nav-link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav-link">
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
