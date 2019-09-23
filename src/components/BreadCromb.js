import React from 'react';

  const Breadcromb = () => {
      return(       
           <div className="Main2">
            {/*<ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Tables</li>
      </ul> */}
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#home">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu1">Everything</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu2">Videos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu3">Images</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu4">Documents</a>
              </li>
            </ul>
           <div className="secund-menu-listview">
              <a href=""><i className="fa fa-sort"></i> Date Added</a>
              <a href=""><i className="fa fa-clock-o" aria-hidden="true"></i> All Time</a>
              <a href=""><i className="fa fa-bars"></i> List View</a>
            </div>
          </div>
          );
        }
  export default Breadcromb;
