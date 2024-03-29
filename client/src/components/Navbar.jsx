import React,{useState} from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";



const Header = styled(AppBar)`
  background: #111111;
  
`;
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: white;
  
`;

const Navbar = () => {
 
  
  return (
    <div className="container  mb-5 pb-5 ">
      {/* <div className="fixed-top">
        <Header position="static ">
          <Toolbar>
            <Tabs to="/">HOME</Tabs>
            <Tabs to="/codeforuser">CODE FOR INTERVIEW</Tabs>
            <Tabs to="/allusers">ALL USER</Tabs>
            <Tabs to="/adduser">ADD USER</Tabs>
            <Tabs to="/room">SCHEDULE INTERVIEW</Tabs>
            <Tabs to="/userprofile"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-person-circle"
             
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg></Tabs>
            
            <Tabs to="/login">LOGIN</Tabs>
          </Toolbar>
        </Header>
      </div>
      ///////////////////////////////////////////////////////////////////////////////////
     <h1>Saran</h1>
     <h1>Saran</h1>
     <h1>Saran</h1> */}

   <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
  <div className="container-fluid  ">
    <NavLink className="navbar-brand" to="/">Brand</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <NavLink className="nav-link active" to="/codeforuser">Code for Interview</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/allusers">All Users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/adduser">Add User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/room">Schedule Interview</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/userprofile"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-person-circle"
             
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/login">Login</NavLink>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


      
    </div>
  );
};

export default Navbar;
