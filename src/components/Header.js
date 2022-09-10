import React from 'react';
import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header({email, onLogout}) {
  const location = useLocation();
  return (
    
    <header className="header">
    <img src={logo} alt="лого_место" className="header__logo"/>
    {location.pathname === "/sign-up" && (<Link to="/sign-in" className="header__link">Войти</Link>)}
    {location.pathname === "/sign-in" && (<Link to="/sign-up" className="header__link">Регистрация</Link>)}
    {location.pathname === "/" && (
    <div className="header__userInfo">
      <p className="header__email">{email}</p>
      <button className="header__button" onClick={() => onLogout()}>Выход</button>
    </div>
    )}
  </header>
  );
}

export default Header;