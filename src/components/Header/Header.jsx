import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  // Function to handle toggling of menu
  const toggleMenu = () => {
    setMenuOpened(prevState => !prevState);
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter padding innerWidth h-container">
        <img src="./logo.png" alt="" width={100} />
        {/* Menu for larger screens */}
        <div className={`h-menu ${menuOpened ? 'open' : ''}`}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        {/* Menu icon for mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
