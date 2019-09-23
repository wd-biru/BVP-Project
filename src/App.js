import React from 'react';

// Import All Component file
import Model from './components/Model';
import MainNBL from './components/MainNBLeft';
import SideNavbar from './components/SideNavbar';
import PageHeader from './components/PageHeader';
import BreadCromb from './components/BreadCromb';
import Section from './components/Section';
import Footer from './components/Footer';


// Import All CSS File
import './layouts/vendor/bootstrap/css/bootstrap.min.css';
import './layouts/vendor/font-awesome/css/font-awesome.min.css';
import './layouts/css/Fontastic.css';
//import './layouts/css/MystyleDefault.css';
import './layouts/css/Custom.css';
import './layouts/css/Me_custom.css';
import './layouts/css/Me_responsive.css';


const App = () => {
  return (
    <div className="App">
     <Model />
     
      <div class="dashboardsty">
       <div className="page">
       <MainNBL />
       <div className="page-content d-flex align-items-stretch">
       <SideNavbar />
       <div className="content-inner">
       <PageHeader />
       <div className="breadcrumb-holder container-fluid">
       <BreadCromb />
       </div>
       <Section />
       <Footer />
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
