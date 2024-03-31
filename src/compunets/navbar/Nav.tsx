import logo from "../../assets/logo.svg";
import burgerIcon from "../../assets/icon-hamburger.svg";
import burgerIconClose from "../../assets/icon-close-menu.svg";
import "../navbar/Nav.css";
import { useState } from "react";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="main-menu">
        <nav className="main-menu__nav">
          <img className="main-menu__nav__logo" src={logo} alt="logo"></img>
          <ul className="main-menu__nav__list">
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">discover</a>
            </li>
            <li>
              <a href="#">get started</a>
            </li>
          </ul>
        </nav>
        <nav className="main-menu__nav--burger-menu">
          <img className="main-menu__nav__logo" src={logo} alt="logo"></img>
          {isOpen ? (
            <img
              onClick={toggleMenu}
              className="main-menu__nav__logo menu-icon"
              src={burgerIconClose}
              alt="drop down menu close"
            ></img>
          ) : (
            <img
              onClick={toggleMenu}
              className="main-menu__nav__logo menu-icon"
              src={burgerIcon}
              alt="drop down menu open"
            ></img>
          )}

          {isOpen && (
            <ul className="main-menu__nav__list--burger-menu">
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">discover</a>
              </li>
              <li>
                <a href="#">get started</a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </>
  );
}
export default Nav;
