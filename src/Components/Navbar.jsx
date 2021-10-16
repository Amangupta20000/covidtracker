import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className="container-fluid  nav_bg mt-5 " >
            <div className="row row1">
             <div className=" mx-auto col-sm-12 col-xs-12 col-lg-12">

        <nav className="navbar navbar-expand-lg   navbar-expand-sm navbar-expand-md navbar-light  ">
        <div className="container-fluid ">
          
      
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link text-info " aria-current="page" to='/covidtracker/' >HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link text-info " aria-current="page" to='/statewise' >STATEWISE</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link text-info" to='/about'>ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link text-info" to='/symptoms'>SYMPTOMS AND PREVENTIONS</NavLink>
              </li>
                   
            </ul>
          </div>
        
      </nav>
      </div>
      </div>
  </div>
    )
}

export default NavBar
