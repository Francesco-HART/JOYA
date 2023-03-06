import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-scroll";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const HandleScroll = () => {
    if (window.scrollY >= 60) {
      document.getElementById("Navbar")?.classList.add("darkHeader");
    } else document.getElementById("Navbar")?.classList.remove("darkHeader");
  };

  window.addEventListener("scroll", HandleScroll);
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Navbar
      id="Navbar"
      className="navbar navbar-expand-lg navbar-light theme-nav fixed-top"
    >
      <div id="navbar-main" className="container-fluid">
        <NavbarBrand
          className="navbar-brand"
          href={`${process.env.PUBLIC_URL}/`}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logojoya.png`}
            alt="logo"
          />
        </NavbarBrand>
        <NavbarToggler className="navbar-toggler" onClick={toggle} />
        <Collapse
          id="navbarSupportedContent"
          className="default-nav"
          isOpen={isOpen}
          navbar
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
                active="true"
              >
                accueil
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                à propos
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                fonctionnalités
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="screenshot"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                aperçu
              </Link>
            </NavItem>
            {/* <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                l'équipe
              </Link>
            </NavItem> */}
            {/*<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {" "}
                blog
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    href={`${process.env.PUBLIC_URL}/blog-list`}
                    onClick={toggle}
                  >
                    Blog
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
  </UncontrolledDropdown>*/}
            {/* <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="price"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                notre offre
              </Link>
            </NavItem> */}
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="testimonial"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                avis
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggle}
              >
                contact
              </Link>
            </NavItem>
            <NavLink
              className="nav-link"
              href={`${process.env.PUBLIC_URL}/FAQ`}
              onClick={toggle}
            >
              FAQ
            </NavLink>
            {/*<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                plus
              </DropdownToggle>
              <DropdownMenu right>
                 <DropdownItem>
                  <NavLink
                    className="nav-link"
                    href={`${process.env.PUBLIC_URL}/sign-in`}
                    onClick={toggle}
                  >
                    sign in
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    href={`${process.env.PUBLIC_URL}/sign-up`}
                    onClick={toggle}
                  >
                    sign up
                  </NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    href={`${process.env.PUBLIC_URL}/thank-you`}
                    onClick={toggle}
                  >
                    remerciements
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    href={`${process.env.PUBLIC_URL}/review`}
                    onClick={toggle}
                  >
                    avis
                  </NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    href={`${process.env.PUBLIC_URL}/FAQ`}
                    onClick={toggle}
                  >
                    FAQ
                  </NavLink>
                </DropdownItem>
                {/* <DropdownItem>
                  <NavLink
                    className="nav-link"
                    href={`${process.env.PUBLIC_URL}/download`}
                    onClick={toggle}
                  >
                    download
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    className="nav-link"
                    href={`${process.env.PUBLIC_URL}/coming-soon`}
                    onClick={toggle}
                  >
                    coming soon
                  </NavLink>
                </DropdownItem> 
              </DropdownMenu>
</UncontrolledDropdown>*/}
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;
