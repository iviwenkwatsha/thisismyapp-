import React from 'react';
import '../Layout.css';
import {Link, useLocation } from "react-router-dom";
//import { Link } from 'react-router-dom';


const Layout = ({children}) => {

    const location = useLocation();

    const userMenu = [{
      name: 'Home',
      path: '/',
      icon: 'ri-home-4-line'
    },{
      name: 'Lecturer',
      path: '/lecturer',
      icon: 'ri-file--line'
    },
     {
      name: 'Appointments',
      path: '/appointments',
      icon: 'ri-file-text-line'
    }, {
      
      name: 'Student Request',
      path: '/request',
      icon: 'ri-git-pull-request-line'
    }, {
      name: 'Profile',
      path: '/profile',
      icon: 'ri-file-user-fill'
    }, {
      name: 'Logout',
      path: '/logout',
      icon: 'ri-logout-circle-r-line'
    }
  ] 

  const menuToBeRenderd = userMenu;

  return (
   <div className = 'main'>
      
        <div className = 'd-flex layout'>

        <div className='sidebar'>
        <div className='side-header'>
            <h1>Consultation System</h1>
        </div>
          <div className='menu'>
             {menuToBeRenderd.map((menu => {
              const isActive = location.pathname === menu.path
              return <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
              <i className = {menu.icon}></i>
              <Link to = {menu.path}>{menu.name}</Link>
              </div>
              
               }))}
          </div>

          </div>

          <div className='content'>
            <div className='header'>
              
            </div>
            <div className='body'>
                {children}
            </div>
        </div>
        <div className='footer'>
        <p>Designed by Iviwe Nkwatsha 216174872</p>
      </div>
    </div>
  </div>

        
     

  )
};
export default Layout;