import React from 'react';
import MainNavbarRight from './MainNBRight';
import logo from './img/me/bvp-logo.svg';

const MainNBL = () => {
  return (
       <header className="header">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-holder d-flex align-items-center justify-content-between">
              {/* Navbar Header*/}
              <div className="navbar-header left">
                {/* Navbar brand */} 
                  <div className="brand-text d-none d-lg-inline-block">
                    <a href="dashboard.html">
                      <img src={logo} alt="BVP" className="logo-menu logo2"  />
                    </a>
                    <form className="navbar-form navbar-left" action="">
                      <i className="fa fa-search"></i>
                    <input type="text" className="form-control navseacrh myBtnb" placeholder="Search For anything" name="search" />
                  </form>
                  </div>
               {/*  Toggle Button */}
                <a id="toggle-btn" href="#" className="menu-btn active">
                <span></span><span></span><span></span></a> 
              </div>
              {/*   Navbar Menu Components */}

              <MainNavbarRight />

            </div>
          </div>
        </nav>
      </header>
  )
  }
  export default MainNBL;