import React, {useContext} from "react";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from 'react-bulma-components';
import { Button } from "react-bulma-components";
import TextAnimation from "./TextAnimation/TextAnimation"

const NavTabs = props => {
  const location = useLocation();

  // function toggleBurgerMenu() {
  //   document.querySelector('.navbar-menu').toggle('is-active');
  // }
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(AuthContext);

  const onClickLogoutHandler = () => {
    AuthService.logout().then(data => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  }

  const unauthenticatedNavbar = () => {
      return (
        <>

          <Navbar.Item>
            <Link to="/login" className={location.pathname === "/" ? "nav-link active naveHeaders is-dark" : "nav-link naveHeaders is-dark"}>
              Login
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/register" className={location.pathname === "/" ? "nav-link active naveHeaders is-dark" : "nav-link naveHeaders is-dark"}>
              Register
            </Link>
          </Navbar.Item>
        </>
      )
  }

  const authenticatedNavBar= () => {
    return (
      <>

        <Navbar.Item>
          <Link to="/search" className={location.pathname === "/search" ? "nav-link active naveHeaders is-dark" : "nav-link naveHeaders is-dark"}>
            Search
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active naveHeaders is-dark" : "nav-link naveHeaders is-dark"}>
            Contact
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link to="/signup" className={location.pathname === "/signup" ? "nav-link active naveHeaders is-dark" : "nav-link naveHeaders is-dark"}>
            Sign Up
          </Link>
        </Navbar.Item>
        
        {/* {
          user.role === "admin" ?
          <Navbar.Item>
            <Link to="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
              Sign Up Admin
            </Link>
          </Navbar.Item>
          : null
        } */}
        <Navbar.Item>
        <Link className="nav-link naveHeaders is-dark"
          
          onClick={onClickLogoutHandler}>
          Logout
        </Link>
        </Navbar.Item>

      </>
    )
  }

  return (
    <Navbar className="is-light is-spaced nav-tabs">
      <Navbar.Brand>
        <Navbar.Item>
        <i className="fas fa-paw"></i>
        </Navbar.Item>
      </Navbar.Brand>
      {/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
          onClick={toggleBurgerMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
      </a> */}
      <Navbar.Item>
        <Link to="/" className={location.pathname === "/" ? "nav-link active naveHeaders is-dark" : "nav-link naveHeaders is-dark"}>
          Home
        </Link>
      </Navbar.Item>

      { !isAuthenticated ? unauthenticatedNavbar() : authenticatedNavBar() }

      {/* <Navbar.Item>
        <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
      </Navbar.Item>
      <Navbar.Item>
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>
      </Navbar.Item>
      <Navbar.Item>
        <Link to="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
          Sign Up
        </Link>
      </Navbar.Item>*/}

      <TextAnimation />

    </ Navbar>
  );
}

export default NavTabs;
