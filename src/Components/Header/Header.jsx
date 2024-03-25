import React from "react";
import Logo from "../Img/Header-logo.svg";
import "./Header.scss";

function Header() {
  const [isActive, setActive] = React.useState(false);

  const openHam = () => {
    const toggleClass = () => {
      setActive(!isActive);
    };

    toggleClass();
  };
  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <div className="header__flex flex items-center gap-7">
          <a href="#">
            <img src={Logo} alt="logo" width={44} height={43} />
          </a>
          <nav className="nav hidden gap-5 ss:block ss:flex">
            <a className="nav__link" href="#">
              Home
            </a>
            <a className="nav__link" href="#">
              About us
            </a>
            <a className="nav__link" href="#">
              Menu
            </a>
            <a className="nav__link" href="#">
              Features
            </a>
            <a className="nav__link" href="#">
              Contact us
            </a>
          </nav>
        </div>
        <button className="header__btn hidden ss:block">Booking Now</button>

        <div className="ss:hidden">
          <div
            className={`hamburger ${isActive ? "hamburger-active" : ""}`}
            onClick={openHam}
          >
            <span class="hamburger__icon"></span>
          </div>
          <div className={`header-links-container ${isActive ? "change" : ""}`}>
            <div className="header-links">
              <a className="nav__link" href="#">
                Home
              </a>
              <a className="nav__link" href="#">
                About us
              </a>
              <a className="nav__link" href="#">
                Menu
              </a>
              <a className="nav__link" href="#">
                Features
              </a>
              <a className="nav__link" href="#">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
