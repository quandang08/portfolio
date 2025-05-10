/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 
      bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6 
        flex justify-between items-center md:grid md:grid-cols-[1fr,3fr,1fr]">
        
        {/* Logo */}
        <a href="/" className="logo">
          <img
            src="/images/logo_self.png"
            width={40}
            height={40}
            alt="Amu"
          />
        </a>

        {/* Navbar & Mobile Toggle */}
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        {/* Contact Button (hidden on small screens) */}
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
