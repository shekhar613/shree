import React from 'react';
import '../Assets/Styles/navbar.css'
import logo from '../Assets/Images/shreeLogo.jpg';
import { NavLink,Navigator} from 'react-router-dom';
import profile_bg from '../Assets/Images/profile_bg.jpg';


function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#011D3B', backgroundImage:`url(${profile_bg})`}}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to=""><img src={logo} alt="logo.."></img></NavLink>
          <p className='logo_text  my-1' style={{textShadow: '#ffff 1px 0 10px'}}> श्री भैरव शक्ति </p>
          <button className="navbar-toggler" type="button " data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="togglericon">&#8215;</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="mx-3  nav-item">
                <NavLink className="nav-link text-light" to="/">Feedback</NavLink>
              </li>
              
              <li className="mx-3  nav-item">
                <NavLink className="nav-link text-light" to="/profile">Profile</NavLink>
              </li>

            </ul>
           
          </div>
        </div>
      </nav>


      {/* <div className='navigator_forPhone'>
        <ul>
          <li><NavLink className='phonenavigator_tab' style={({ isActive }) => ({
            borderBottom: isActive ? '3px solid black' : 'none'
          })} to="">Feedback</NavLink> </li>
          <li><NavLink className='phonenavigator_tab' style={({ isActive }) => ({
            borderBottom: isActive ? '3px solid black' : 'none'
          })} id='2' to="/blogs">Blogs</NavLink> </li>
          <li><NavLink className='phonenavigator_tab' style={({ isActive }) => ({
            borderBottom: isActive ? '3px solid black' : 'none'
          })} id='3' to="/home">More</NavLink> </li>
        </ul>

      </div> */}
    </>
  );
}

export default Navbar