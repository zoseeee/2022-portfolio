import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll/modules";
import "../Header/Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const HL = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sct = window.scrollY;
      sct > 870
        ? HL.current.classList.add("on")
        : HL.current.classList.remove("on");
    });
  }, []);

  return (
    <header className="Header">
      <div className="wrapper">
        <button onClick={() => toggleMenu()} ref={HL}>
          <div className={isOpen ? "on" : ""}></div>
          <div className={isOpen ? "on" : ""}></div>
        </button>
        <nav className="gnb">
          <ul>
            <li>
              <Link to="home" smooth="true" duration={1000}>
                <h2>Home</h2>
              </Link>
            </li>
            <li>
              <Link to="project" smooth="true" duration={1000}>
                <h2>Project</h2>
              </Link>
            </li>
            <li>
              <Link to="about" smooth="true" duration={1000}>
                <h2>About</h2>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={isOpen ? "show-menu" : "hide-menu"}>
        <ul>
          <li>
            <Link
              to="home"
              smooth="true"
              duration={1000}
              onClick={() => toggleMenu(false)}
            >
              <h2>HOME</h2>
            </Link>
          </li>

          <li>
            <Link
              to="project"
              smooth="true"
              duration={1000}
              onClick={() => toggleMenu(false)}
            >
              <h2>PROJECT</h2>
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth="true"
              duration={1000}
              onClick={() => toggleMenu(false)}
            >
              <h2>ABOUT</h2>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
