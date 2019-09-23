import React from 'react';

const Footer = () => {
  return(
           <footer className="main-footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <p>BVP &copy; 2019</p>
                </div>
                <div className="col-sm-6 text-right">
                  <p>Design by <a href="#" className="external">BVP</a></p>
                  {/*  Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding : */}
                </div>
              </div>
            </div>
          </footer>
      )
}
export default Footer;
