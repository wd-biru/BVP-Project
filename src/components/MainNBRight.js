import React from 'react';

const MainNBRight = () => {
  return (
       <header className="header-right">
        
              <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
            {/*  Search */}
                <li className="nav-item d-flex align-items-center"><a href="#" className="nav-link"><i className="fa fa-question"></i></a></li>
                <li className="nav-item d-flex align-items-center"><a href="#" className="nav-link"><i className="fa fa-sort"></i></a></li>
                <li className="nav-item d-flex align-items-center"><a href="#" className="nav-link"><i className="fa fa-bar-chart"></i></a></li>
                {/*  Notifications */}
                <li className="nav-item dropdown"> <a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-bell"></i></a>
                </li>
                {/*  Logout  */}  
                <li className="nav-item"><a href="login.html" className="nav-link logout"> <i className="fa fa-user"></i></a></li>
              </ul>
           
      </header>
      );
  }
  export default MainNBRight;