/**
 * @copyright 2025 codewithamu
 * @license Apache-2.0
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const moveActiveBox = (target) => {
    if (!target || !activeBox.current) return;
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = target;
    activeBox.current.style.top = `${offsetTop}px`;
    activeBox.current.style.left = `${offsetLeft}px`;
    activeBox.current.style.width = `${offsetWidth}px`;
    activeBox.current.style.height = `${offsetHeight}px`;
  };

  const handleActiveLink = (event) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove('active');
    }
    event.target.classList.add('active');
    lastActiveLink.current = event.target;
    moveActiveBox(event.target);
  };

  useEffect(() => {
    if (lastActiveLink.current) {
      moveActiveBox(lastActiveLink.current);
    }
    const handleResize = () => {
      if (lastActiveLink.current) moveActiveBox(lastActiveLink.current);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link active', ref: lastActiveLink },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Work', link: '#work', className: 'nav-link' },
    { label: 'Reviews', link: '#reviews', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' },
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          key={key}
          href={link}
          ref={ref}
          className={className}
          onClick={handleActiveLink}
        >
          {label}
        </a>
      ))}

      <div ref={activeBox} className="active-box"></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
