import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="s-header">
      {/* Mobile view toggle */}
      <div className="header-mobile">
        <span className="mobile-home-link">
          <Link to="/">Kosuri Pavan Kumar.</Link>
        </span>
        <a className="mobile-menu-toggle" href="#0">
          <span>Menu</span>
        </a>
      </div>

      <div className="row wide main-nav-wrap">
        <nav className="column lg-12 main-nav">
          <ul>
            <li>
              <a href="/#intro">Pavan.</a>
            </li>
            <li>
              <a href="/#intro">Intro</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/contact">Say Hello</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
